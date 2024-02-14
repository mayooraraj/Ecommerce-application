import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/userLogin';
import { ShareuserdataService } from 'src/app/service/shareuserdata.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-userprofile',
  templateUrl: './bx-userprofile.component.html',
  styleUrls: ['./bx-userprofile.component.scss']
})
export class BxUserprofileComponent implements OnInit{
  
  editProfileForm! : FormGroup;
  userData: any;

  constructor(private fb : FormBuilder, private userService:UserService, private router:Router){}
  
  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno: ['', Validators.required]
    });

    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      this.editProfileForm.patchValue({
        name: this.userData.name,
        email: this.userData.email,
        phno: this.userData.phno,
        
      });
      console.log(this.userData);
      
    }
  }
 //onsubmit  method

onSubmit(inputData: any): void {
  this.userService.updateprofile(inputData, this.userData.id).subscribe({next: (res: any) => {
      console.log(res);

      Swal.fire({
        icon: 'success',
        title: 'Profile Updated Successfully!',
        text: 'Please log in again to see the updates.',
        confirmButtonText: 'OK'
      }).then(() => {
        // Reset the form
        this.editProfileForm.reset();
        // Redirect to login page
        this.router.navigate(['/user-login']);
      });
    },
    error: (error: any) => {
      console.error(error);
      alert('Error occurred while updating');
    }
  });
  this.editProfileForm.reset();
}
  
}
