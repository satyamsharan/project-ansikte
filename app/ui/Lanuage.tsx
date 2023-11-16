
interface Language{
    name:string;
    proficiency:string;
    color:string;
}

export default function Language(){
    const educationList:Language[] = [
        {
            name:'English',
            proficiency:'Expert',
            color:"1"
        },{
            name:'Swedish',
            proficiency:'Beginner',
            color:"2"
        },{
            name:'Italian',
            proficiency:'Beginner',
            color:"3"
        },{
            name:'Hindi',
            proficiency:'Native',
            color:"4"
        }
    ];

    function getLanguage(lang: Language): React.ReactElement{
        return (
            <div className={`m-2 pl-2 pr-2 pt-1 pb-1 text-center rounded-md border-a${lang.color} min-w-[70px]`}>
                <div>
                    <div className={`text-sm text-a${lang.color}`}>{lang.name}</div>
                    <div className="text-xs text-white">{lang.proficiency}</div>
                </div>
            </div>
        );
    }



    function getAllLanguage(){
        const result: React.ReactElement[] = [];
        educationList.map((lang, index) => {
            result.push(
                <div key={`edu-${index}`}>
                    {getLanguage(lang)}
                </div>
            );
        })
        return (
            <div className="flex flex-wrap justify-center">
                {result}
            </div>
        );

    }
    return (
        <div className="p-1">
            <div className="text-center mb-2">Language proficiency</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Proficient in multiple languages, I possess a diverse linguistic skill set, enabling effective communication across cultural boundaries.</div>
            <div className="pt-2 pb-2">
              {getAllLanguage()}
            </div>
        </div>
    );
}