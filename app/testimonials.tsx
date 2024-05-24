const clients = [ 
    { 
        text:'This is a template figma file, turned into code using anima. learn  more at Animaapp.com',
        author_image: '/image/logo1.jpeg',
        author:'FAFO SHOYO',
        ranking: 5,
        company: 'Google'
    },
    { 
        text:'This is a template figma file, turned into code using anima. learn  more at Animaapp.com',
        author_image: '/image/logo3.jpeg',
        author:'FAFO SHOYO',
        ranking: 5,
        company: 'Google'
    },
    { 
        text:'This is a template figma file, turned into code using anima. learn  more at Animaapp.com',
        author_image: '/image/logo2.webp',
        author:'FAFO SHOYO',
        ranking: 5,
        company: 'Google'
    },
]

const Testimonials =() => {
return(
<>
<h2>Clients</h2>
<div>
{ 
clients.map((client, index) =>{
    return(


<div key={ index}>
    <h3>{ client.text}</h3>
        <div>
            <Image src={`/images/${client.author_image}`}width='50' height='50'> </Image>
            <p>
                <Image src='/images/start.jpg' width='20' height='20'/>
                {client.author}, <br/>
                {client.company} </p>
        </div>      
    </div> 
    )
})
}
    </div>
</>

)
 }
