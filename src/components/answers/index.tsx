import { AnswerProvider, AnswerContainer, SliderProvider } from "./style"

import SlickCarousel from "../carousel"

const questions = [
    {
        id: 1,
        name: 'How the RedUz project works?',
        description: 'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.'
    },
    {
        id: 2,
        name: 'Do you provide hosting with Startup Framework?',
        description: 'No, hosting is on you. You upload the result on your hosting via FTP or using other tools you like. You can use any server, just make sure it have a PHP installed in case if you need a contact form.'
    },
    {
        id: 3,
        name: 'What exactly am I buying?',
        description: 'You’re buying an access to the Startup Generator app to export ready-made templates with the rest source files included. It’s an online tool, not a software. For more details about generator’s workflow watch this tutorial.'
    },
    {
        id: 4,
        name: 'Are you planning to update Startup Framework?',
        description: 'We are! Here is the changelog of changes we’ve made after the release. Thanks our clients who helped us to improve our product.'
    },
    {
        id: 5,
        name: 'How Startup Framework works?',
        description: 'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.'
    },
    {
        id: 6,
        name: 'Do you provide support for customers?',
        description: 'Yes, we are. Please use our contact us form to chat with us. We DO NOT provide product support via Facebook, Twitter or others sources.'
    }
]
export default function AnswerComponent() {
  
    return (
        <AnswerProvider>
            <AnswerContainer className="container">
                <h1>Your questions answered</h1>
                <div className="row">
                    {
                        questions.map((question) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={question.id}>
                                <div className="question-info">
                                    <article>{question.name}</article>
                                    <p>{question.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <SliderProvider>
                   <SlickCarousel/>
                </SliderProvider>
            </AnswerContainer>

        </AnswerProvider>
    )
}
