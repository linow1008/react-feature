import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import Button from "./components/Button/Button";

function App() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="py-[30px] border-b text-[30px] font-bold w-full text-center mb-[30px]">
                React 컴포넌트 카탈로그
            </div>
            {/* <Accordion width="500px">
                <AccordionItem
                    title="title"
                    icon="hi"
                    text="texttexttexttexttexttexttexttexttexttexttexttexttexttext"
                />
            </Accordion> */}
            {/* <Button text="button123" /> */}
        </div>
    );
}

export default App;
