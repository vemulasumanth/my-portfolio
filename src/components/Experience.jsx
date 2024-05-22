import React from 'react'
const Experience = () => {
    const techs1=[
        {
            id:1,
            src:"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
            title:'Java',
            style:'shadow-blue-500'
        },
        {
            id:2,
            src:"https://banner2.cleanpng.com/20180412/kye/kisspng-python-programming-language-computer-programming-language-5acfdc3636bac7.8891188615235717662242.jpg",
            title:'Python',
            style:'shadow-white'
        },
        {
            id:3,
            src:"https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
            title:'Java Script',
            style:'shadow-yellow-300'
        }
    ]
    const techs2=[
        {
            id:1,
            src:"https://du0ulnyus7r80.cloudfront.net/wp-content/uploads/2020/02/spring-boot-logo-png-4-transparent.png",
            title:'Spring Boot',
            style:'shadow-green-500'
        },
        {
            id:2,
            src:"https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
            title:'React Js',
            style:'shadow-blue-400'
        },
        {
            id:3,
            src:"https://pbs.twimg.com/profile_images/914842431748739072/66NFe2g3_400x400.jpg",
            title:'Hibernate',
            style:'shadow-yellow-700'
        },
        {
            id:4,
            src:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
            title:'HTML',
            style:'shadow-red-700'
        },
        {
            id:5,
            src:"https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png",
            title:'Tailwind CSS',
            style:'shadow-blue-700'
        }
    ]
    const techs3=[
        {
            id:1,
            src:"https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png",
            title:'MySQL',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:"https://www.commvault.com//wp-content/uploads/2019/08/sql-server_logo.jpg?quality=80&w=930",
            title:'Microsoft SQL Server',
            style:'shadow-red-800'
        },
        {
            id:3,
            src:"https://w7.pngwing.com/pngs/364/878/png-transparent-oracle-database-cloud-database-oracle-corporation-oracle-cloud-cloud-computing-text-logo-cloud-computing-thumbnail.png",
            title:'Oracle Datbase',
            style:'shadow-white'
        }
    ]
    const techs4=[
        {
            id:1,
            src:"https://cloudnesil.com/wp-content/uploads/2018/12/mic-logo.jpg",
            title:'Microservices Architecture',
            style:'shadow-green-500'
        },
        {
            id:2,
            src:"https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
            title:'AWS',
            style:'shadow-yellow-500'
        },
        {
            id:3,
            src:"https://w7.pngwing.com/pngs/219/411/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing-thumbnail.png",
            title:'Docker',
            style:'shadow-blue-500'
        },
        {
            id:4,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfPFF_TAIe3OkrovE3Vlcg5UH2k_fhagT7BCnlgltkw&s",
            title:'Git',
            style:'shadow-red-500'
        },
        {
            id:5,
            src:"https://logowik.com/content/uploads/images/intellij-idea286.logowik.com.webp",
            title:'Intellij',
            style:'shadow-white'
        }
    ]
  return (
    <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='text-2xl font-semibold py-6 text-gray-400'>
                  Software Engineer at Accenture (Oct 2022 - Oct 2023)
                </p>
                <p className='py-4 text-gray-500'>
                At Accenture, I had the opportunity to work on a dynamic B2B web application for a 
                leading snacks and beverage company. This application enabled the client and partner
                 customers to monitor alerts, manage consumables, gain payment insights, and oversee 
                 inventory for registered equipment. My role involved extensive use of Java and 
                 Spring Boot to develop APIs, facilitating seamless CRUD operations for the selection menus.
                  Additionally, I contributed to an inventory management system during my full-stack training, 
                  creating microservices for vendors and materials to streamline data retrieval and reporting processes.
                </p>
            </div>
            <p className='text-xl font-semibold py-4 text-gray-400'>
            Programming, Scripting Languages :
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs1.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}
                     className='w-20 h-20 mx-auto object-contain' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>

            <p className='text-xl font-semibold py-4 text-gray-400'>
            Web Technologies :
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs2.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}
                     className='w-20 h-20 mx-auto object-contain' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>
            <p className='text-xl font-semibold py-4 text-gray-400'>
            Database :
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs3.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}
                     className='w-20 h-20 mx-auto object-contain' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>
            <p className='text-xl font-semibold py-4 text-gray-400'>
            Tools/Architecture :
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs4.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}
                     className='w-20 h-20 mx-auto object-contain' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience