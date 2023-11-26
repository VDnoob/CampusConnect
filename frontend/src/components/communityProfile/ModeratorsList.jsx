import { Avatar, Typography , Chip} from "@mui/material"

export default function ModeratorsList(){
    const moderatorsData = [
        { 
            id: 4, 
            name: "Elon Musk", 
            bio: "Technology Architect: AWS Serverless, React Js, Node Js, AWS, S3, Dynamo DB, SES, SQS, Athena",
            imageUrl: 'https://cdn.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg',
        },
        { 
            id: 5, 
            name: "Mark Zuckerberg", 
            bio: "Technology Architect: AWS Serverless, React Js, Node Js, AWS, S3, Dynamo DB, SES, SQS, Athena",
            imageUrl: 'https://api.time.com/wp-content/uploads/2016/01/ap_794116323555.jpg',
        },
        { 
            id: 6, 
            name: "Jeff Bezos", 
            bio: "Technology Architect: AWS Serverless, React Js, Node Js, AWS, S3, Dynamo DB, SES, SQS, Athena",
            imageUrl: 'https://www.channelnews.com.au/wp-content/uploads/2021/05/bezos.jpg',
        },

    ]

    return(
        <div className="w-[100%] bg-[#f5f5f5] mt-[30px] border-[1px] border-solid rounded-[7px]">
            <p className='font-medium font-sans text-lg ml-[15px] mt-[10px]'>Moderators</p>
            
            {moderatorsData.map((moderator) => (
                <div className="flex flex-row m-[5px]" >
                <div>
                    <Avatar 
                        key={moderator.id} 
                        className="m-[5px]" 
                        src={moderator.imageUrl} 
                        alt={moderator.name} 
                        sx={{ width: 46, height: 46 }}     
                    />
                </div>
                <div className="flex flex-col">
                    <Typography 
                        variant="h6" 
                        className='font-sans font-bold pl-4'
                    >
                    {moderator.name} 
                    </Typography>
                    <Typography
                        variant="h7"
                        className="font-sans pl-4"
                    >
                        {moderator.bio}
                    </Typography>
                </div>
                </div>
            ))}
        </div>    
    )
}