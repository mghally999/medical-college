export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50" ><span className="font-semibold text-lg dark:text-white">1. Override Colors</span> <br />
                    For any change in colors : tailwind.config.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                       <span>primary: "#2F73F2",</span>
                       <span>midnight_text: "#102D47",</span>
                       <span>border: "#e6e9ec",</span>
                       <span>PowderBlue: "#EFFBFF",</span>
                       <span>SlateBlue: "#547593",</span>
                       <span>LightPeriwinkle: "#CFE0FF",</span>
                       <span>placeholder: "#7a83a9",</span>
                       <span>stroke: "#CDE0E7",</span>
                       <span>footer_stroke: "#EFFBFF",</span>
                       <span>PictonBlue: "#46C4FF",</span>
                       <span>darkmode: "#091222",</span>
                       <span>darklight: "#131d30",</span>
                       <span>dark_border: "#162644",</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50" ><span className="font-semibold text-lg dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : tailwind.config.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                       <span>primary: "#2F73F2",</span>
                       <span>midnight_text: "#102D47",</span>
                    </p>
                </div>
            </div>
        </>
    )
}