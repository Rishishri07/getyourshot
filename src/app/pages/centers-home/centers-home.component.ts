import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {VaccinationCentersService} from "../../shared/services/vaccination-centers.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {convertDistance, getPreciseDistance} from "geolib";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-home',
  styleUrls: ['./centers-home.component.scss'],
  templateUrl: './centers-home.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CentersHomeComponent implements OnInit, OnDestroy {

  public destroySubject$: Subject<void> = new Subject();
  public displayedColumns: string[] = ['Hospital Name', 'Category', 'Center Type', 'District', 'Pincode', 'State'];
  public dataSource: MatTableDataSource<any>;
  public showErr = false;
  public currrentLat: number;
  public currentLong: number;

  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) public sort: MatSort;
  constructor(private vaccinationCentersService: VaccinationCentersService,
              private snackBar: MatSnackBar) { }
  public states = [
    'Andhra Pradesh', 'Arunachal_Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Jharkhand',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal_Pradesh', 'Jammu And Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Puducherry',
    'Punjab', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar_Pradesh', 'Uttarakhand',
    'West_Bengal',
  ];
  public expandedElement: any;
  public selectedStates = this.states;
  public selectedState: string;
  public loading = false;
  public isExpansionDetailRow = (i: number, row: object) => row.hasOwnProperty('detailRow');

  public onKey(value): void {
    this.selectedStates = this.search(value);
  }

  public search(value: string): any {
    const filter = value.toLowerCase();
    return this.states.filter((option) => option.toLowerCase().startsWith(filter));
  }

  public ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.currrentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      },
      () => {
        alert('Position could not be determined.');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

    if (this.dataSource.filteredData.length === 0) {
      this.showErr = true;
    } else {
      this.showErr = false;
    }
  }

  public searchCenters(): void {
    this.loading = true;
    this.vaccinationCentersService.getCenters(this.selectedState).subscribe((data) => {
      this.loading = false;
      for (let i = 0; i < data.length; i++) {
        if (data[i].latitude && data[i].longitude) {
          data[i].distance = convertDistance(getPreciseDistance(
            { latitude: this.currrentLat, longitude: this.currentLong },
            { latitude: data[i].latitude, longitude: data[i].longitude },
            1,
          ), 'km');
        }
      }
      data.sort((a, b) => {
        return a.distance - b.distance;
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    }, (err) => {
      const error = 'Something went wrong';
      this.openSnackBar(error, 'Dismiss');
      this.loading = false;
    });
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }

  public openGoogleMap(currrentLat, currentLong): void {
    const url = `http://www.google.com/maps/place/${currrentLat},${currentLong}`;
    window.open(url, '_blank');
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
