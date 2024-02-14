import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/userLogin';
import { SignUp } from 'src/app/models/userSignup';
import { ShareuserdataService } from 'src/app/service/shareuserdata.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bx-user-login',
  templateUrl: './bx-user-login.component.html',
  styleUrls: ['./bx-user-login.component.scss']
})
export class BxUserLoginComponent implements OnInit {
  reactiveForm!: FormGroup;
  loginForm!:FormGroup;

  user: Login[] = [];
  showLogin =false;

  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
    private shareService:ShareuserdataService){}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,,Validators.email]],
      phno:['',[Validators.required, Validators.minLength(10)]],
     
    });

    this.loginForm = this.fb.group({
      username:['',Validators.required],
      useremail:['',[Validators.required,Validators.email]],
      userphno:['',[Validators.required, Validators.minLength(10)]],
    })
  }

  //user sign up form submiting
  onSubmit(data:SignUp){
    if (this.reactiveForm.valid)
     {
        this.userService.postUserSignUp(data).subscribe((res)=> {
        this.reactiveForm.reset();
        alert("Successfully Registered");  
      })
    }
    else
    {
      alert("Please provide valid data");
    }

  }

 
  onSubmitloginform(data:Login){
    
    if(this.loginForm.valid)
    {
      this.userService.getUsers().subscribe((users: any[]) => {
        //n
        const foundUser = users.find(user => user.email === data.useremail && user.phno === data.userphno);
        if (foundUser) {
          
          this.shareService.setLoggedInUserData(foundUser);
          localStorage.setItem('token', Math.random().toString());

          console.log("local strg data",foundUser);
          localStorage.setItem('user', JSON.stringify(foundUser));
          console.log("after setItem",foundUser);

          // Use SweetAlert to show a success message
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You have successfully logged in.',
            confirmButtonText: 'OK',
          })
          this.loginForm.reset();
          this.router.navigate(['profile']);
        } else {
          alert('Invalid email or phone number.');
        }
      });
    } 
    else 
    {
      alert('Please provide valid data');
    }
  }


  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
