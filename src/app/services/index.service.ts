import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class IndexService {
    constructor(
        private http: HttpClient,
    ) { }

    //! main api
    getAll() {
        return this.http.get(`${environment.API_URL}/D_CB_RPayin_Master`)
    }

    //! dropdown
    DropdownDocNo() {
        return this.http.get(`${environment.API_URL}/R_Document_Profile/35`)
    }
    GetDocFormat(id:number) {
        return this.http.get(`${environment.API_URL}/R_Document_Profile/Getdoc/35/${id}`)
    }
    GetBookBank() {
        return this.http.get(`${environment.API_URL}/CB_Bookbank`)
    }
    GetRReceivedStatus() {
        return this.http.get(`${environment.API_URL}/D_CB_RReceived_Master/status/H`)
    }
}