const express=require('express')
const app=express()
const cors = require('cors')
app.use(express.json());
app.use(cors());

const data = [
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
        head1: ["Infinix Note 12:", "AMOLED Helio G88 SoC!"],
        head2: { h1: "ATC Android ToTo Company", h2: "42M views - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        head1: ["My first UX Design case study -", "This got me my first job."],
        head2: { h1: "Saptarshi Prakash", h2: "48K views - 1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        head1: ["My Mix", "This got me my first job."],
        head2: { h1: "Lopamudra Mitra" , h2: "48K views - 1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"}
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        head1: ["UX Drsign-What is it?(From AJ", "&Smart)"],
        head2: { h1: "AJ&Smar", h2: "150KM views - 3 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        head1: ["Mix - Mombati|Mohon Sharif", "Dose|Mahib Ahsan ft Anika"],
        head2: { h1: "Mohon Sharif", h2: "150KM views - 3 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
        head1: ["", "|48 VISA-FREE"],
        head2: { h1: "Nadir On The Go", h2: "1.7Mviews - 1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        head1: ["14 Advanced Tips to Design", "Faster in Figma"],
        head2: { h1: "Mizko", h2: "1.5Mviews -1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
        head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    },
    {
        src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
    }
];

const data100 = [
    { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
    { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
    { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
];

const data19 = [
    { text: "All" },
    { text: "Cook Studio"},
    { text: "UX"},
    { text: "Case Study"},
    { text: "Music"},
    { text: "Bangla Lofi"},
    { text: "Tour"},
    { text: "Saintmartin"},
    { text: "Tech"},
    { text: "iphone 13"},
    { text: "User Interface Design"},
    { text: "Computer"}
];


app.get('/data',(req,res) => {
    res.json(data);
})

app.get('/data100',(req,res) => {
    res.json(data100);
})

app.get('/data19',(req,res) => {
    res.json(data19);
})

const PORT =3000;
app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}`)
})