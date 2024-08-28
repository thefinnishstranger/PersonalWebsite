import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ksykLogo from '../resources/ksykLogo.png';
import ewcLogo from '../resources/ewcLogo.jpg';
import unaLogo from '../resources/unaLogo.png';
import uttLogo from '../resources/uttLogo.png';
import '../main.css' 

const EducationEntry = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    textAlign: 'center',
    minHeight: 350,
    minWidth: '100%',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        
    }
}));

const Education: React.FC = () => {
    return (
        <Container sx={{ mt: 5 }} id='education'>
            <Typography variant='h4' align='center' gutterBottom>
                Education
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 4 }} className='education-box'>
                {[
                    {
                        name: "University of Texas at Tyler",
                        location: "Tyler, Texas, USA",
                        years: "2023 - Present",
                        degree: "Bachelor's Degree in Computer Science",
                        highlights: "Competed as a NCAA Division 2 basketball player, made the President's List, with expected graduation in May 2025",
                        logo: uttLogo,
                    },
                    {
                        name: "University of North Alabama",
                        location: "Florence, Alabama, USA",
                        years: "2022 - 2023",
                        degree: "Pursued Studies in Computer Science",
                        highlights: "Played as a NCAA Division 1 basketball player and commenced studies in Computer Science",
                        logo: unaLogo,
                    },
                    {
                        name: "Eastern Wyoming College",
                        location: "Torrington, Wyoming, USA",
                        years: "2020 - 2022",
                        degree: "Associate's Degree in Mathematics",
                        highlights: "Competed as a NJCAA Division 1 basketball player and earned Phi Theta Kappa academic honors",
                        logo: ewcLogo,
                    },
                    {
                        name: "Kulosaari Upper Secondary School",
                        location: "Helsinki, Finland",
                        years: "2017 - 2020",
                        degree: "High School Diploma with Specialization in Mathematics, Physics, and Psychology",
                        highlights: "Established a strong academic foundation in an international environment and demonstrated academic excellence",
                        logo: ksykLogo,
                    },
                ].map((entry, index) => (
                    <EducationEntry key={index}>
                        <img src={entry.logo} alt={`${entry.name} logo`} style={{ width: 80, marginBottom: 16 }} />
                        <Typography variant='h6' gutterBottom>
                            {entry.name}
                        </Typography>
                        <Typography color='textPrimary'>
                            <strong>Location:</strong> {entry.location}
                        </Typography>
                        <Typography color='textPrimary'>
                            <strong>Years Attended:</strong> {entry.years}
                        </Typography>
                        <Typography color='textPrimary'>
                            <strong>Degree:</strong> {entry.degree}
                        </Typography>
                        <Typography color='textPrimary'>
                            <strong>Highlights:</strong> {entry.highlights}
                        </Typography>
                    </EducationEntry>
                ))}
            </Box>
        </Container>
    )
}

export default Education;
