import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"


const Pass = () => {
  const [quiz1, setQuiz1] = useState(null);
  const [quiz2, setQuiz2] = useState(null);
  const [marks,setmarks] = useState('');
  const [more,setmore] = useState(false);
  const [empty,setempty] = useState(false);



  function submit(){
    setmore(false)
    setempty(false)
    if(quiz1 != null || quiz2 != null){
        if(quiz1 <= 100 && quiz2 <= 100){
            let weight1 = quiz1*0.2;
            let weight2 = quiz2*0.3;
            let totalWeight = weight1+weight2;
        
            console.log(totalWeight);
        
            if (quiz2 > quiz1){
              weight2 = 0.2 * quiz2
            }
            else{
              weight1 = 0.2 * quiz1
            }
            
            const marks_required = 40 - totalWeight
        
            if (marks_required > 0){
           const minimum_marks_required = marks_required / 0.4
            setmarks(minimum_marks_required.toFixed(2))
        }else{
            setmarks('0')
        }
        }else{
            setmore(true)
        }
    }else{
        setempty(true)
    }
    
    
  }
  

  return (
    <div className=' p-5 flex items-center flex-col'>

      <h1 className='text-xl font-bold text-white mb-8'>Pass calculator</h1>
      <Input
        type="number"
        className="text-white w-[400px] mb-6"
        value={quiz1}
        onChange={(e) => setQuiz1(e.target.value)}
        placeholder="Enter Quiz 1 score"
      />
      <Input
        type="number"
        className="text-white w-[400px] mb-6"
        value={quiz2}
        onChange={(e) => setQuiz2(e.target.value)}
        placeholder="Enter Quiz 2 score"
      />

      <Button onClick={()=>submit()} variant="outline">Submit</Button>

      {more && (
        <p className='text-md text-red-400 mt-4'>Please enter quiz scores between 0 and 100.
        </p>)}

    {empty && (
         <p className='text-md text-red-400 mt-4'>Please enter the marks .Lol!!
        </p>
    )

    }
      
 

      {marks !== "" && !more && !empty && (
  <h1 className="text-white mt-6">
    {marks != "0" ? `You have to get ${marks}% to pass the course` : "Just attempt the final exam, you are already passed!"}
  </h1>
)}

     
    </div>

  );
};

export default Pass;
