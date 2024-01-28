export interface Employee{
    id: number;
    name:String;
    email:String;
    jopTitle:String;
    phone:String;
    imageUrl:String;
    employeeCode:String;
}

 












// this employee ts

// implements OnInit {

//     public employees: Employee[] = [];
//     constructor(private employeeService: EmployeeService) { }
//     ngOnInit() {
//       this.getEmployee();
//     }
//     public getEmployee(): void {
//       this.employeeService.getEmployees().subscribe(
//         (response: Employee[]) => {
//           this.employees = response;
//         },
//         (error: HttpErrorResponse) => {
//           alert(error.message);
//         }
//       );
//     }
//     public onAddEmployee(addForm: NgForm): void{
//       document.getElementById('add-employee-from')?.click();
//       this.employeeService.addEmployee(addForm.value).subscribe(
//         (response: Employee)=> {
//           console.log(response);
//           this.getEmployee();
//         },
//         (error: HttpErrorResponse)=> {
//           alert(error.message);
        
//         }
//       );
//     }
  
//     public onOpenModal(employee: Employee, mode: string): void {
//       const container = document.getElementById('main-container');
//       const button = document.createElement('button');
//       button.type = 'button';
//       button.style.display = 'none';
//       button.setAttribute('data-toggle', 'modal');
//       if (mode === 'add') {
//         button.setAttribute('data-target', '#addEmployeeModal');
//       }
//       if (mode === 'edit') {
//         button.setAttribute('data-target', '#editEmployeeModal');
//       }
//       if (mode === 'delete') {
//         button.setAttribute('data-target', '#deleteEmployeeModal');
//       }
//       // container.appendChild(button);
//       // button.click();
//     }
//   }
  






















// <form class="form-inline my-2 my-lg-0">
//     <label for="search">Search</label>
    
//     <input type="search" name="key" id="searchName" class="form-control-mr-sm-2" placeholder="Search employees">
// </form>

// <button style="margin-left: 80%;" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
//    Add New Employee
// </button>


// <div class="container" id="main-container">
// <div class="cartbox">
//     <div class="headcart">
//     <!-- <p class="lead">you have <label class="text-danger">{{cartProducts.length}}</label> item in your cart</p> 
//         <span class="text-danger card-header" (click)="cleareCart()">Clear Shoping cart</span> -->
//     </div>
//     <table class="table table-striped">
//         <thead>
//             <tr>
//                 <th class="font">Id</th>
//                 <th class="font">Name</th>
//                 <th style="width: 25%;" class="font">Email</th>
//                 <th class="font">Jop Title</th>
//                 <th class="font">Phone</th>

                
//                 <th></th>
//             </tr>
//         </thead>
//   <tbody>
//         <tr *ngFor="let employee of employees ; let index = index">
//          <td> {{employee.id}}</td> 
//         <td>{{employee.name}} </td>  
//         <td> {{employee.email}} </td>
//         <td> {{employee.jopTitle}} </td>
//         <td> {{employee.phone}} </td>


//         <td>
//              <div class="quantity">
//               <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal"> Delete</button> 
             

//                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editEmployeeModal"> Edit</button> 

//             </div> 
//         </td>
//        <!-- <td>{{item.item.price * item.quantity}}</td> -->
       
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr >
       
//         <th></th> 
//         <th></th>
//         <th></th>
    
  
//         <!-- <th><button class="btn btn-success"">Order Now</button></th> -->
    
//     </tr>
//   </tfoot>
//     </table>
//     </div>
//     <!-- <div class="alert alert-success" *ngIf="success" role="alert"><strong>Mell done!</strong> your order is successfully send</div> -->
// </div>




















// this employee html


// <!--   
//    Add Employee -->
//   <!-- <div class="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="addEmployeeModal" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLongTitle"> Add Modal</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//           ...
         
//       </div>
//     </div>
//   </div>  -->


//   <!-- Delete Employee -->
//   <!-- <div class="modal fade" id="deleteEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="deleteEmployeeModal" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLongTitle"> Delete Employee </h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//           ...
//           <p> Are you Sure you want to delete employee?</p>
//           <div class="modal-footer">
//              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
//              <button type="button" class="btn btn-danger" data-dismiss="modal">Yes</button>
//           </div>
//         </div>
//         </div>
//            </div>
//            </div> -->
           
           
// <!-- Edit -->
// <!-- <div class="modal fade" id="editEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="editEmployeeModal"
// aria-hidden="true">
// <div class="modal-dialog" role="document">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//             <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="modal-body">
//           ..
//       <form action="">
//         <div class="form-group">
//             <label for="name">Name</label>
//             <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="name" required>
//         </div>

//         <div class="form-group">
//             <input type="hidden" name="id" class="form-control" id="id" aria-describedby="emailHelp" placeholder="name" required>
//             <input type="hidden" name="userCode" class="form-control" id="userCode" aria-describedby="emailHelp" placeholder="name" required>
//         </div>

//         <div class="form-group">
//             <label for="email">Email</label>
//             <input type="email" name="email" class="form-control" id="email" placeholder="Email" required>
//         </div>

//         <div class="form-group">
//             <label for="jop title">Jop title</label>
//             <input type="text" name="jop title" class="form-control" id="jop title" placeholder="jop title" required>
//         </div>
//         <div class="form-group">
//             <label for="phone">Phone</label>
//             <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone" required>
//         </div>
//       </form>

//         </div>
//         <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//     </div>
// </div>
// </div> -->

//   <div class="col-lg-12 col-md-12 col-xl-12">
//     <div class="alert alert-info" role="alert">
//         <h4 class="alert-heading"> No Employees !</h4>
//     <P> No Employees were found.</P>
//     </div>

//   </div>









// employee css



// .font
// {
//     font-size: 24px;
// }
// tr  th{
//     width: 80px;
// }


// .cartbox{
// border: 1px solid white;
// border-radius: 5px;
// padding: 0 20px;
// margin: 50px 0;
// }
// .table{
//     .quantity{
//       display:flex ;
//       justify-content: space-between;
//       input{
//         margin: 0 20px;
//       }

//     }
//     tbody{
//         border-top: 1px solid red;
//         border-bottom: 1px solid red;
//     tr{
//         td{
//             border-bottom: 0;
//             text-align: center;
//             vertical-align: middle;
//         img{
//             width: 80%;
//             height: 80%;
//             border-radius: 50%;
//         }
//         }
//     }
//     input{
//         text-align: center;
//     }
//     }
// }
// .headcart{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     span{
//         font-size: 16px;
//         cursor: pointer;
//         transition: all 0.3s ease-in-out;
//         &:hover{
//             background-color: orange;
//             color: white;
//             box-shadow: 0px 5px 10px rgb(black, green, blue)
//         }
//     }
// }

// span{
//     cursor: pointer;
// }
 












