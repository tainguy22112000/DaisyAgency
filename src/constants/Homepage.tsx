import { HighSpeedIcon, TechSupportIcon, LimitCostIcon, ITSystemIcon, InfrastructureIcon, DataCenterIcon, SystemMaintenanceIcon, ServerAndStorageIcon, InformationSecurityIcon, CortexLogo, PaloaltoLogo, PrismaLogo } from '~/assets/icon';
import UserInfo from '~/components/UserInfo';

export const features = [{
    icon: <HighSpeedIcon/>,
    caption: "High speed operating system",
    content: "Our company constantly invests, deploys and integrates more and more tools and new technology applications to ensure stable and fast operation of the system.",
    link: "#"
}, {
    icon: <TechSupportIcon/>,
    caption: "Technical support 24/7/365",
    content: "A well-trained support team & industry standards are available 24/7/365 to help you deal with your problem as quickly as possible.",
    link: "#"
}, {
    icon: <LimitCostIcon/>,
    caption: "Limit costs - increase profits",
    content: "Bringing customers a comprehensive and optimal solution to bring benefits quickly & save costs for businesses.",
    link: "#"
}]

export const solutions = [{
    icon: <ITSystemIcon/>,
    name: "IT system administration"
}, {
    icon: <InfrastructureIcon/>,
    name: "Infrastructure - network solutions"
}, {
    icon: <SystemMaintenanceIcon/>,
    name: "System maintenance"
}, {
    icon: <ServerAndStorageIcon/>,
    name:"Server & Storage Solutions" 
}, {
    icon: <InformationSecurityIcon/>,
    name: "Information security & safety solutions"
}, {
    icon: <DataCenterIcon/>,
    name: "Data center solutions"
}];

export const userComments = [{
    user: <UserInfo avatar="src\assets\images\Avatar01.png" name="Christina" role="CEO - AZ Company" />,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
},
{
    user: <CortexLogo/>,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
}, {
    user: <UserInfo avatar="src\assets\images\Avatar02.png" name="Christopher" role="CTO - SoN Digital" />,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
}, {
    user: <UserInfo avatar="src\assets\images\Avatar03.png" name="Selena" role="Creative Director" />,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
}, {
    user: <PrismaLogo/>,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
}, {
    user: <PaloaltoLogo/>,
    comment: "Design is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties"
}];

export const news = [{
    image: <img src="src\assets\images\NewsImg01.png"/>,
    date: "Oct 10, 2022",
    title: "System maintenance",
    content: "PSYS constantly invests, deploys and integrates more and more tools and new technology applications to ensure stable and fast operation of the system."
}, {
    image: <img src="src\assets\images\NewsImg02.png" />,
    date: "Oct 10, 2022",
    title: "System maintenance",
    content: "PSYS constantly invests, deploys and integrates more and more tools and new technology applications to ensure stable and fast operation of the system."
}, {
    image: <img src="src\assets\images\NewsImg03.png" />,
    date: "Oct 10, 2022",
    title: "System maintenance",
    content: "PSYS constantly invests, deploys and integrates more and more tools and new technology applications to ensure stable and fast operation of the system."
}]