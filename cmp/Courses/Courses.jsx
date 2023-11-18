import { Card,Container,Typography,CardActions,CardContent,Button,Grid } from "@mui/material";

const Courses = () =>{

    const myCourses = [
        {
            title : "ReactJS",
            price : "3000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title : "Angular",
            price : "5000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title : "Nodejs",
            price : "4000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title : "Nextjs",
            price : "5000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    const NewCourse = ({item}) =>{
        const tmp = (
            <>
            <Grid item sm={4}>
                <Card sx={{p:3}}>
                <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {item.title}
                   </Typography>
                   <Typography variant="h4" color="text.secondary">
                    {item.price}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {item.desc}
                   </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" >Syllabus</Button>
                </CardActions>
               </Card>
            </Grid>
            </>
        );
        return tmp;
    }


    const design = (
        <>
            <Container sx={{py:4,p:3}}>
                <Typography variant="h2" sx={{mb:3}}>Courses</Typography>
                <Grid container spacing={4}>
                {
                    myCourses.map((item,index)=>{
                        return <NewCourse key={index} item={item} />
                    })
                }
                </Grid>
            </Container>
        </>
    );
    return design;
};

export default Courses;