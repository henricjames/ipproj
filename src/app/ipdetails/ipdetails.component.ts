import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: "app-ipdetails",
  templateUrl: "./ipdetails.component.html",
  styleUrls: ["./ipdetails.component.css"],
})
export class IpdetailsComponent implements OnInit {
  ip: any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {

  }

  validate_ip() {
    var ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (this.ip.match(ipformat)) {
      this.get_ip_details(this.ip);
      console.log("valid ip");
      this.router.navigate(["/iptable/"+this.ip]);
    } else {
      alert("you have entered an invalid ip")
      return false
    }
  }


  get_ip_details(ip){
    console.log("hello");
    var url = "http://localhost/html/get_ip_details.php?ip="+ip;
    this.http.get(url).subscribe((data) => {

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
