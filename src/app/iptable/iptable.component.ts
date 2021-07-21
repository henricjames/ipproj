import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-iptable',
  templateUrl: './iptable.component.html',
  styleUrls: ['./iptable.component.css']
})
export class IptableComponent implements OnInit {

  constructor(private http: HttpClient,private route:ActivatedRoute) { }
 httpoutput:any
 current_ip_data:any;
show_search_history:boolean
  ngOnInit() {
    let ip= this.route.snapshot.params.ip
    console.log("submitted ip is"+ ip)
    this.get_ip_details(ip)
    this.get_db_data();
  }

sort(value)
{
  console.log(value);

  this.httpoutput.sort((a, b) => a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0)

}

  get_db_data()
  {
    console.log("hello");
    var url = "http://localhost/html/db/read.php";
    this.http.get(url).subscribe((data) => {
      console.log(data)
      this.httpoutput=data
    });


  }

showhistory()
{
  this.show_search_history=true
}

  get_ip_details(ip){
    console.log("hello");
    var url = "http://localhost/html/get_ip_details.php?ip="+ip;
    this.http.get(url).subscribe((data) => {
      this.current_ip_data=data;
      console.log("heasdasdsad"+this.current_ip_data)
      var querystring=(Object.keys(data).map(key => key + '=' + data[key]).join('&'));
      this.insert_to_db(querystring)
    });


  }
  insert_to_db(params)
  {
    var url = "http://localhost/html/db/insert.php?"+params;
    this.http.get(url).subscribe();
  }
}
