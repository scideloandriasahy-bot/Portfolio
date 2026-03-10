export const portfolioData = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            experience: "Expériences",
            cv: "CV",
            certificates: "Certificats"
        },
        identity: {
            name: "ANDRIASAHY Tsikomia Scidelo",
            title: "Étudiant en deuxième année de cycle d'ingénieur",
            institution: "Ecole Normale des Sciences Appliquées de TANGER - ENSAT - Université Abdelmalek Essaâdi",
            specialties: ["Électronique", "Automatique", "Robotique", "Systèmes Embarqués"],
            contacts: {
                email: "scideloandriasahy@gmail.com",
                linkedin: "www.linkedin.com/in/scidelo",
                superprof: "https://www.superprof.ma/Scidelo",
                phone: "+212 777 647 362"
            },
            image: "assets/images/profile.jpg"
        },
        about: {
            title: "À propos",
            text: "Passionné par la modélisation mathématique et l'implémentation sur systèmes matériels. Mon expertise se concentre sur le développement de solutions intelligentes utilisant des microcontrôleurs (familles Arduino, ESP32, PIC) et la puissance des FPGAs. Je m'efforce de combler le fossé entre la théorie algorithmique et l'exécution physique en temps réel."
        },
        projects: {
            title: "Projets",
            filterAll: "Tous",
            items: [
                {
                    id: 1,
                    title: "Contrôle d'un Bras Robotique 2-DOF",
                    category: "Robotique",
                    tags: ["Fuzzy Logic", "ANFIS", "MATLAB", "Simulink"],
                    description: "Conception d'un système de contrôle intelligent pour un bras manipulateur à deux degrés de liberté. Utilisation de la logique floue et d'ANFIS pour optimiser la précision du suivi de trajectoire.",
                    image: "assets/images/project1.jpg",
                    links: {
                        github: "#",
                        report: "assets/pdfs/report1.pdf"
                    },
                    details: `
                        ### Objectifs
                        Le projet visait à surmonter les non-linéarités inhérentes à la dynamique d'un bras 2-DOF.
                        
                        ### Méthodologie
                        - Modélisation dynamique sous Simulink.
                        - Entraînement de réseaux de neurones flous (ANFIS).
                        - Comparaison avec un contrôleur PID classique.
                        
                        \`\`\`matlab
                        % Exemple de script MATLAB pour l'initialisation
                        L1 = 0.5; L2 = 0.4;
                        q = [pi/4, pi/6];
                        x = L1*cos(q(1)) + L2*cos(q(1)+q(2));
                        \`\`\`
                    `
                },
                {
                    id: 2,
                    title: "Suiveur Solaire Intelligent",
                    category: "Électronique",
                    tags: ["Arduino", "LDR", "Embedded Systems"],
                    description: "Système d'orientation automatique de panneaux solaires combinant des capteurs LDR et des algorithmes de positionnement astronomique pour maximiser l'efficacité énergétique.",
                    image: "assets/images/project2.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Concept
                        Optimisation du rendement photovoltaïque par un double asservissement.
                        
                        ### Matériel utilisé
                        - Arduino Uno
                        - Servo-moteurs MG996R
                        - Capteurs photo-résistifs (LDR)
                        
                        \`\`\`cpp
                        // Lecture des capteurs
                        int topL = analogRead(ldrTL);
                        int topR = analogRead(ldrTR);
                        if (abs(topL - topR) > tolerance) {
                            pos = (topL > topR) ? pos + 1 : pos - 1;
                            servoH.write(pos);
                        }
                        \`\`\`
                    `
                },
                {
                    id: 3,
                    title: "Implémentation PSO en VHDL",
                    category: "FPGA",
                    tags: ["VHDL", "Digital Design", "PSO"],
                    description: "Accélération matérielle de l'algorithme d'Optimisation par Essaim de Particules (PSO) sur FPGA pour des applications de traitement du signal en temps réel.",
                    image: "assets/images/project3.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Architecture
                        Développement d'une architecture parallèle permettant de mettre à jour les positions des particules à chaque cycle d'horloge.
                        
                        ### Caractéristiques
                        - Virgule fixe pour la gestion des données.
                        - Pipelinage profond pour maximiser la fréquence de fonctionnement.
                        
                        \`\`\`vhdl
                        -- Exemple de mise à jour de vitesse
                        velocity_next <= std_logic_vector(signed(velocity) + 
                                         signed(c1 * r1 * (pbest - current_pos)) +
                                         signed(c2 * r2 * (gbest - current_pos)));
                        \`\`\`
                    `
                }
            ]
        },
        experience: {
            title: "Expériences & Engagements",
            items: [
                {
                    role: "Animateur d'ateliers robotique",
                    organization: "Centre de Robotique pour Enfants",
                    period: "2023 - Présent",
                    description: "Initiation des jeunes (8-14 ans) aux concepts de base de l'électronique et de la programmation avec Lego Mindstorms et Arduino."
                },
                {
                    role: "Tuteur Sciences & Technologie",
                    organization: "Superprof",
                    period: "2022 - Présent",
                    description: "Accompagnement d'élèves en mathématiques, physique et initiation à l'ingénierie."
                }
            ]
        },
        certificates: {
            title: "Certificats",
            items: [
                { title: "Certification 1", image: "assets/images/cert1.jpg", issuer: "Coursera", date: "2024" }
            ]
        },
        education: {
            title: "Parcours & CV",
            downloadCV: "Télécharger mon CV (PDF)",
            items: [
                { degree: "Cycle d'Ingénieur (2ème année)", institution: "Université Abdelmalek Essaâdi", period: "2023 - 2026", details: "Spécialité EEAA" },
                { degree: "Classes Préparatoires (CPGE)", institution: "...", period: "2021 - 2023", details: "Filière MPSI/MP" }
            ]
        },
        actions: {
            contact: "Me contacter",
            linkedin: "LinkedIn",
            github: "Voir sur GitHub",
            report: "Consulter le rapport"
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            cv: "CV",
            certificates: "Certificates"
        },
        identity: {
            name: "ANDRIASAHY Tsikomia Scidelo",
            title: "Second-year Engineering Student",
            institution: "Ecole Normale des Sciences Appliquées de TANGER - ENSAT - Abdelmalek Essaâdi University",
            specialties: ["Electronics", "Automation", "Robotics", "Embedded Systems"],
            contacts: {
                email: "scideloandriasahy@gmail.com",
                linkedin: "www.linkedin.com/in/scidelo",
                superprof: "https://www.superprof.ma/Scidelo",
                phone: "+212 777 647 362"
            },
            image: "assets/images/profile.jpg"
        },
        about: {
            title: "About",
            text: "Passionate about mathematical modeling and hardware implementation. My expertise focuses on developing intelligent solutions using microcontrollers (Arduino, ESP32, PIC families) and the power of FPGAs. I strive to bridge the gap between algorithmic theory and real-time physical execution."
        },
        projects: {
            title: "Projects",
            filterAll: "All",
            items: [
                {
                    id: 1,
                    title: "2-DOF Robotic Arm Control",
                    category: "Robotics",
                    tags: ["Fuzzy Logic", "ANFIS", "MATLAB", "Simulink"],
                    description: "Design of an intelligent control system for a two-degree-of-freedom manipulator arm. Use of fuzzy logic and ANFIS to optimize trajectory tracking accuracy.",
                    image: "assets/images/project1.jpg",
                    links: {
                        github: "#",
                        report: "assets/pdfs/report1.pdf"
                    },
                    details: `
                        ### Objectives
                        The project aimed to overcome non-linearities inherent in 2-DOF arm dynamics.
                        
                        ### Methodology
                        - Dynamic modeling in Simulink.
                        - Training of fuzzy neural networks (ANFIS).
                        - Comparison with a classic PID controller.
                    `
                },
                {
                    id: 2,
                    title: "Smart Solar Tracker",
                    category: "Electronics",
                    tags: ["Arduino", "LDR", "Embedded Systems"],
                    description: "Automatic solar panel orientation system combining LDR sensors and astronomical positioning algorithms to maximize energy efficiency.",
                    image: "assets/images/project2.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Concept
                        Optimization of photovoltaic yield through dual feedback control.
                    `
                },
                {
                    id: 3,
                    title: "PSO Implementation in VHDL",
                    category: "FPGA",
                    tags: ["VHDL", "Digital Design", "PSO"],
                    description: "Hardware acceleration of the Particle Swarm Optimization (PSO) algorithm on FPGA for real-time signal processing applications.",
                    image: "assets/images/project3.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Architecture
                        Development of a parallel architecture allowing particle positions to be updated at each clock cycle.
                    `
                }
            ]
        },
        experience: {
            title: "Experience & Engagement",
            items: [
                {
                    role: "Robotics Workshop Instructor",
                    organization: "Robotics Center for Children",
                    period: "2023 - Present",
                    description: "Introducing young people (8-14 years old) to basic electronics and programming concepts with Lego Mindstorms and Arduino."
                },
                {
                    role: "Science & Technology Tutor",
                    organization: "Superprof",
                    period: "2022 - Present",
                    description: "Supporting students in mathematics, physics, and introduction to engineering."
                }
            ]
        },
        certificates: {
            title: "Certificates",
            items: [
                { title: "Certification 1", image: "assets/images/cert1.jpg", issuer: "Coursera", date: "2024" }
            ]
        },
        education: {
            title: "Education & CV",
            downloadCV: "Download my CV (PDF)",
            items: [
                { degree: "Engineering Degree (2nd year)", institution: "Abdelmalek Essaâdi University", period: "2023 - 2026", details: "EEAA Specialty" },
                { degree: "Preparatory Classes (CPGE)", institution: "...", period: "2021 - 2023", details: "MPSI/MP Stream" }
            ]
        },
        actions: {
            contact: "Contact Me",
            linkedin: "LinkedIn",
            github: "View on GitHub",
            report: "View Report"
        }
    }
};

