import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='max-w-[1240px] mx-auto sm:px-16 px-8'>
            <h2 className='pt-[100px]'> <span className='text-black'>About</span></h2>
            <h1 className='py-2'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Charlie Lovett</span></h1>
            <div className='mt-4' data-fade='2'>
                <Image
                    className='float-right ml-6 w-40 md:w-72 rounded-md'
                    src='/../public/assets/about-me.png'
                    width='1500'
                    height='1695'
                    alt='Photo of me'
                    preview={false}
                />
                <article className='prose dark:prose-invert'>
                    <p className='text-gray-600 leading-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac est diam. Mauris maximus tempus dui, ut porta libero accumsan
                    convallis. Vestibulum eu ultricies augue, non porta lectus. Integer ullamcorper elementum ligula. Mauris sit amet porta eros.
                    Nunc vestibulum risus vel felis feugiat scelerisque. Morbi at viverra nunc. Sed egestas finibus nisl sit amet dignissim.</p>
                    <br/>
                    <p className='text-gray-600 leading-8'>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis quam at orci interdum, et vestibulum est interdum.
                    Integer dapibus enim vitae lobortis congue. Nulla venenatis lobortis viverra. Integer gravida dui vitae efficitur accumsan. Nunc
                    facilisis mi a ligula lobortis interdum. Morbi vitae nisl hendrerit, accumsan ligula a, accumsan nisi. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vivamus congue tortor neque, a sagittis nunc interdum eget. Donec ultrices consectetur eros, eu laoreet
                    turpis consequat eget. Praesent ut ante lectus. Duis vel ante nec dolor aliquet lacinia. Curabitur justo nunc, pulvinar eget cursus vehicula,
                    tincidunt ullamcorper purus.
                    </p>
                    <br/>
                    <p className='text-gray-600 leading-8'>
                    Proin at tellus sed nulla ornare sagittis. In facilisis nibh tellus, gravida sollicitudin risus
                    semper non. Proin malesuada tortor ac purus pellentesque, sed sagittis dui elementum. Sed ut congue nibh. Nullam id lorem ut velit
                    eleifend ultrices at ac turpis. Praesent accumsan iaculis dui, ac malesuada metus pretium at. Cras convallis, ipsum non condimentum facilisis,
                    leo mauris sollicitudin turpis, sodales rutrum tortor purus eu dolor. Proin non nunc convallis, pretium nulla a, interdum felis.
                    Vestibulum vitae posuere nisl. Phasellus quis auctor felis. Nulla tincidunt id ante ac dignissim. Integer eleifend suscipit cursus.
                    Nam pretium orci quis fringilla condimentum. Sed porttitor, magna vitae ultrices varius, diam dui tempor erat, auctor ullamcorper
                    sapien turpis vel ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <br/>
                </article>
            </div>
        </div>
    );
  };

const About_2 = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  sm:px-16 px-8'>
            <div className='col-span-2 '>
                <h2 className='pt-[100px]'> <span className='text-black'>About</span></h2>
                <h1 className='py-2'> <span className='bg-gradient-to-r from-[#FFB939] to-[#f9ec5f] text-black'>Charlie Lovett</span></h1>
                <p className='py-4 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac est diam. Mauris maximus tempus dui, ut porta libero accumsan
                convallis. Vestibulum eu ultricies augue, non porta lectus. Integer ullamcorper elementum ligula. Mauris sit amet porta eros.
                Nunc vestibulum risus vel felis feugiat scelerisque. Morbi at viverra nunc. Sed egestas finibus nisl sit amet dignissim.</p>
                <p className='py-4 text-gray-600'>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis quam at orci interdum, et vestibulum est interdum.
                Integer dapibus enim vitae lobortis congue. Nulla venenatis lobortis viverra. Integer gravida dui vitae efficitur accumsan. Nunc
                facilisis mi a ligula lobortis interdum. Morbi vitae nisl hendrerit, accumsan ligula a, accumsan nisi. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus congue tortor neque, a sagittis nunc interdum eget. Donec ultrices consectetur eros, eu laoreet
                turpis consequat eget. Praesent ut ante lectus. Duis vel ante nec dolor aliquet lacinia. Curabitur justo nunc, pulvinar eget cursus vehicula,
                tincidunt ullamcorper purus.
                </p>
                <p className='py-4 text-gray-600'>
                Proin at tellus sed nulla ornare sagittis. In facilisis nibh tellus, gravida sollicitudin risus
                semper non. Proin malesuada tortor ac purus pellentesque, sed sagittis dui elementum. Sed ut congue nibh. Nullam id lorem ut velit
                eleifend ultrices at ac turpis. Praesent accumsan iaculis dui, ac malesuada metus pretium at. Cras convallis, ipsum non condimentum facilisis,
                leo mauris sollicitudin turpis, sodales rutrum tortor purus eu dolor. Proin non nunc convallis, pretium nulla a, interdum felis.
                Vestibulum vitae posuere nisl. Phasellus quis auctor felis. Nulla tincidunt id ante ac dignissim. Integer eleifend suscipit cursus.
                Nam pretium orci quis fringilla condimentum. Sed porttitor, magna vitae ultrices varius, diam dui tempor erat, auctor ullamcorper
                sapien turpis vel ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
            <div className='flex w-full h-auto items-center justify-center'>
                <Image
                    src='/../public/assets/about-me.png'
                    alt='/'
                    width='1000'
                    height='1000'/>
            </div>
        </div>
    </div>
  )
}

export default About