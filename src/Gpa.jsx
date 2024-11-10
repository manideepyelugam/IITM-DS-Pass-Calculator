import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Half1Icon } from "@radix-ui/react-icons";


const Gpa = () => {
   const [number,setnumber] = useState('');
   const [input,setinput] = useState(0)
   const [courses,setcourses] = useState([])
   const [gpa,setgpa] = useState(0)
   

   const submit = () => {
      const num = parseInt(number);
      setinput(num)
      setnumber(null)
      setgpa(null)

      if(num > 0 && number <= 8){
           setcourses(Array(num).fill({'credits': "","grade" : ""}));
      }else{
         setnumber("")
      }
   }

  const creditChanges = (index,value) => {
       setcourses((prevCourse) => prevCourse.map((courses,i) => i === index ? {...courses,credits : value} : courses))
  }

  const gradeChanges = (index,value) => {
        setcourses((prevCourse) => prevCourse.map((courses,i) => i == index ? {...courses,grade:value} : courses))
  }
     
  const finalGpa = () => {

    let gradeToValue = 0
    let total = 0
    let creditSum = 0

         for (let index = 0; index < courses.length; index++) {

              let grade = courses[index].grade
              switch(grade){
                case "S":
                  gradeToValue = 10;
                  break;
               case "A":
                 gradeToValue = 9;
                 break;
               case "B":
                 gradeToValue = 8;
                 break;
               case "C":
                 gradeToValue = 7;
                 break;
               case "D":
                 gradeToValue = 6;
                 break;
               case "E":
                 gradeToValue = 4;
                 break;
               case "U":
                 gradeToValue = 0
                 break
               case "W":
                  gradeToValue = 0
             }
             let credit = parseInt(courses[index].credits)
             creditSum = creditSum + credit

             total = total+credit*gradeToValue

              
         }

         console.log(creditSum);
         

         setgpa((total/creditSum).toFixed(2))


  }

  console.log(gpa);
  
  
     

    


  return (
    <div className='h-screen flex flex-col items-center justify-center'>
          <div className="flex w-full flex-col max-w-sm items-center space-x-2">
            <div className="flex">
            <Input type="number" className={'text-white mr-2'} value={number} onChange={(e) => setnumber(e.target.value)} placeholder="Enter number of courses" />
            <Button type="submit" onClick={submit}  variant="outline">Submit</Button>
            </div>
            

             {input > 8 || input < 0? 
             <p className="text-red-500 text-center mt-10">LOL!! Are you studying in IITM ? HowTF you can do {input} courses in one semester ?</p> : ""};

           {input <= 8 && input > 0 ? 
                    courses.map((course,index) => (
                      <div key={index} className="flex flex-col items-center justify-center"> 
                       <div className="flex flex-col items-center justify-center mb-4">
                       <Input type="number" className={'text-white mr-2 mb-4'} value={courses.credits} onChange={(e) => creditChanges(index,e.target.value)} placeholder="Course Credits" />
                      
                       <DropdownMenu >
            <DropdownMenuTrigger className="border p-1 text-sm px-4 rounded-md border-white text-white"> {course.grade || "Choose Grade"}</DropdownMenuTrigger>
            <DropdownMenuContent>
             {["S","A","B","C","D","E","U","W"].map((value) => (
                             <DropdownMenuItem key={index} onClick={() => gradeChanges(index,value)}>{value}</DropdownMenuItem>
             ))}
          
            </DropdownMenuContent>
          </DropdownMenu>
          
                       </div>
                </div> ))  
                          
             : null}

              {input <=8 && input > 0? <Button type="submit" onClick={finalGpa}  variant="outline">Submit</Button>:""}

              {gpa && input > 0 && input <= 8 && <h1 className="text-green-400 mt-8 text-2xl font-bold">Your GPA : {gpa}</h1>}
   
    </div>
    </div>
  )
}

export default Gpa

