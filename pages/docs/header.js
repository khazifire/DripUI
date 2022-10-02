import Head from 'next/head'
import { useRef, useState } from 'react';
import { BasicBtns } from '../../components/drip/buttons/basicBtsns';
import { ColoredShadowBtns } from '../../components/drip/buttons/coloredShadowBtns';
import Meta from '../../components/layout/meta';
import PageHeading from '../../components/other/PageHeadings';


export default function Buttons() {
    // const btnAreaRef = useRef(null);
    const [CopySuccess, setCopySuccess] = useState(false);
    const [btnId, setBtnId] = useState();


    const copyToClipboard = async (buttonId) => {
        setCopySuccess(false);
        try {
            console.log("hello")
            await navigator.clipboard.writeText(
                document.querySelector(`#${buttonId}`).outerHTML
            );
            setCopySuccess(true);
            setBtnId(buttonId)
        } catch (error) {
            setCopySuccess(false);
        }
        setTimeout(() => {
            setCopySuccess(false)
            setBtnId()
        }, 4000)
    };


    return (
        <>
            <Meta
                title={'DripUI - Tailwind CSS Buttons'}
                description={'DripUI offers a wide range of responsive NavBars, including outlined navbar, animated hamburger menus, ....'}
                url={'/components/header'}
            />
            <PageHeading
                title={'Header Components'}
                alt={'header'}
                description={'The Header component is needed in applications and websites as a site must have a form of navigation for users, DripUI offers a wide range of responsive NavBars, including outlined navbar with animated hamburger menus for mobile state.'}
            />

            <section className='grid grid-cols-1 gap-16 md:grid-cols-2'>
                <div className='flex flex-col gap-4'>
            {(CopySuccess && btnId == btn.id) ? <span className='absolute inline-flex gap-1 py-2 text-sm -bottom-8'>Copied! <i className="ri-chat-smile-2-line animate-bounce"></i> </span> : ""}
                 
                </div>




            </section>
        </>
    )
}
