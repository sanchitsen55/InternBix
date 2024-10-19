import React from "react";

const Blogs = () => {
  
  const BlogsList = [
    { label: 'Internbix is a Platform where you can learn lots of thing in order to kick start the journey for learning and development in a technology', href: '/about/our-story',img:'/public/Homepage.png',head1:'Creating',head2:'Confident',head3:'Communicators',bg:'blue'},
    { label: 'Internbix is a Platform where you can learn lots of thing in order to kick start the journey for learning and development in a technology', href: '/about/our-story',img:'/public/Homepage.png',head1:'sanchit',head2:'Confident',head3:'Communicators',bg:'red'},
    { label: 'Internbix is a Platform where you can learn lots of thing in order to kick start the journey for learning and development in a technology', href: '/about/our-story',img:'/public/Homepage.png',head1:'Creating',head2:'Confident',head3:'Communicators',bg:'orange'},
    { label: 'Internbix is a Platform where you can learn lots of thing in order to kick start the journey for learning and development in a technology', href: '/about/our-story',img:'/public/Homepage.png',head1:'Creating',head2:'Confident',head3:'Communicators',bg:'yellow'},
    { label: 'Internbix is a Platform where you can learn lots of thing in order to kick start the journey for learning and development in a technology', href: '/about/our-story',img:'/public/Homepage.png',head1:'Creating',head2:'Confident',head3:'Communicators',bg:'green'},
  ];

  return (
    <>
    {
      BlogsList.map((ele)=>{
        return(
    <div className=" w-full h-full pt-6 pb-6 " style={{backgroundColor:ele.bg}}>
      <div className="grid grid-cols-2 items-center pt-2 pb-2 ">
        {/* Image container */}
        <div className="img pl-64 ">
          <img src="/public/Homepage.png" className="w-96 h-auto" alt="Communicators" />
        </div>

        {/* Text container */}
        <div className="head items-center ">
          <h1 className="text-white font-bold text-5xl leading-tight mb-8">
            {ele.head1}
            <br />
            {ele.head2}
            <br />
            {ele.head3}
          </h1>  
            <p className="text-white text-xl leading-8 font-bold ">{ele.label}</p>

            <button className="bg-white rounded-md px-4 py-2 mt-2 mb-2" onClick={()=>{
              
            }}>Book your free trial</button>
          </div>
          
        </div>
      </div>
        )
      })
    }
    
    </>
  );
  
};

export default Blogs;
