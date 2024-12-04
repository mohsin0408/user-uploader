import React, { useState, useEffect } from "react";

import {
 collection,
 getDocs,
 addDoc,
 deleteDoc,
 doc,
} from "firebase/firestore";

import { db } from "../firebase";


const Form = () => {

 const [users, setUsers] = useState([]);


 const [firstName, setFirstName] = useState("");

 const [lastName, setlastName] = useState("");

 const [email, setEmail] = useState("");

 const [phone, setPhone] = useState("");

 const [message, setMessage] = useState("");

 const onSubmit = async (e) => {

   e.preventDefault();


   await addDoc(collection(db, "users"), {

     firstName,

     lastName,

     email,

     phone,

     message,

   });


   setFirstName("");

   setlastName("");

   setEmail("");

   setPhone("");

   setMessage("");

 };


 useEffect(() => {

   const getUsers = async () => {

     const data = await getDocs(collection(db, "users"));


     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

   };

   getUsers();

 }, []);


 const handleDelete = async (id) => {

   try {

     await deleteDoc(doc(db, "users", id));

     setUsers(users.filter((e) => e.id != id));

   } catch (err) {

     console.log(err);

   }

 };


 return (

   <>

     <div className="relative p-8 flex flex-col min-w-0 break-words w-full     ">

       <div className="rounded-t bg-white mb-0 px-6 py-6">

         <div className="text-center flex justify-between">

           <h6 className="text-blueGray-700 text-xl font-bold">

             Add New User

           </h6>

         </div>

       </div>

       <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

         <form onSubmit={onSubmit}>

           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">

             User Information

           </h6>

           <div className="flex flex-wrap">

             <div className="w-full lg:w-6/12 px-4">

               <div className="relative w-full mb-3">

                 <label

                   className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                   htmlFor="grid-password"

                 >

                   First Name

                 </label>

                 <input

                   type="text"

                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                   value={firstName}

                   onChange={(e) => setFirstName(e.target.value)}

                   pattern="[a-z]{4,20}"

                   title="3 to 20 lowercase letters"

                   required

                 />

               </div>

             </div>

             <div className="w-full lg:w-6/12 px-4">

               <div className="relative w-full mb-3">

                 <label

                   className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                   htmlFor="grid-password"

                 >

                   Last Name

                 </label>

                 <input

                   type="text"

                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                   value={lastName}

                   onChange={(e) => setlastName(e.target.value)}

                   pattern="[a-z]{4,20}"

                   title="3 to 20 lowercase letters"

                   required

                 />

               </div>

             </div>

             <div className="w-full lg:w-6/12 px-4">

               <div className="relative w-full mb-3">

                 <label

                   className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                   htmlFor="grid-password"

                 >

                   Email address

                 </label>

                 <input

                   type="email"

                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                   value={email}

                   onChange={(e) => setEmail(e.target.value)}

                   required

                 />

               </div>

             </div>

             <div className="w-full lg:w-6/12 px-4">

               <div className="relative w-full mb-3">

                 <label

                   className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                   htmlFor="grid-password"

                 >

                   Phone Number

                 </label>

                 <input

                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                   type="number"

                   value={phone}

                   onChange={(e) => setPhone(e.target.value)}

                   required

                 />

               </div>

             </div>

             <div className="w-full lg:w-6/12 px-4"></div>

           </div>


           <div className="text-center mt-6">

             <button

               className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

               type="submit"

             >

               ADD USER

             </button>

           </div>

         </form>

         {users.map((e) => (

           <tr>
           <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
           <span className={"ml-3 font-bold text-blueGray-600 "}>

                 {e.firstName}

               </span>

          </td>

             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

               {e?.lastName}

             </td>


             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

               <div className="flex">{e?.email}</div>

             </td>

             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

               <div className="flex">{e?.phone}</div>

             </td>

             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

               {" "}

               <button

                 className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                 onClick={() => handleDelete(e.id)}

               >

                 DELETE USER

               </button>

             </td>

           </tr>

         ))}

       </div>

     </div>

   </>

 );

};


export default Form;


