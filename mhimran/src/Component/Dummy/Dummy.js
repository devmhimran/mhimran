import React, { useEffect, useRef } from 'react';
import useWindowSize from '../UseWindowSize/UseWindowSize';
import Portfolio from '../Portfolio/Portfolio';

const Dummy = () => {
    //Hook to grab window size
    const size = useWindowSize();

    // Ref for parent div and scrolling div
    const app = useRef();
    const scrollContainer = useRef();

    // Configs
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    // Run scrollrender once page is loaded.
    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    //set the height of the body.
    useEffect(() => {
        setBodyHeight();
    }, [size.height]);

    //Set the height of the body to the height of the scrolling div
    const setBodyHeight = () => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
            }px`;
    };

    // Scrolling
    const skewScrolling = () => {
        //Set Current to the scroll position amount
        data.current = window.scrollY;
        // Set Previous to the scroll previous position
        data.previous += (data.current - data.previous) * data.ease;
        // Set rounded to
        data.rounded = Math.round(data.previous * 100) / 100;

        // Difference between
        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const skew = velocity * 7.5;

        //Assign skew and smooth scrolling to the scroll container
        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

        //loop vai raf
        requestAnimationFrame(() => skewScrolling());
    };
    return (
        <div className='dummy' ref={app}>
            <div ref={scrollContainer}>
                <p>fast</p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, incidunt, voluptatum cumque quia vitae, omnis eius laborum labore animi dolorem facilis qui enim laudantium iste odit aut! Explicabo quisquam quia quibusdam placeat possimus officia quas quod iusto sapiente velit culpa nostrum nobis veniam facilis, similique iure magni, officiis vitae natus sed deleniti. Facilis dolorum blanditiis quidem autem dignissimos nobis excepturi. Tempore voluptates ea a impedit quae dolorum nisi odit quisquam ipsa modi voluptatem et adipisci labore hic maxime, voluptas sint quidem maiores temporibus eum officiis explicabo sequi iure. Quisquam atque accusamus unde ipsam nostrum explicabo exercitationem impedit voluptatem possimus doloribus esse aliquam illum soluta fuga, excepturi placeat voluptates saepe rem hic veritatis. Dolorum omnis dignissimos veritatis, sint libero nemo cupiditate, ex, consequuntur ducimus quae accusamus sit et eaque temporibus accusantium ipsa eum nobis! Sed, asperiores amet architecto pariatur veritatis nihil delectus ipsa laudantium, voluptatem dolores, consequuntur eius quod vitae reprehenderit corrupti dolorem hic sapiente aperiam facilis excepturi animi. Ducimus dolores, quis beatae soluta harum accusamus! Labore sed ipsa blanditiis ut expedita eveniet! Odit maiores natus cumque expedita cupiditate sed ducimus dolores modi suscipit molestiae tenetur voluptatibus, perferendis, totam fugiat tempore similique, saepe omnis soluta consequatur! Provident dolore impedit velit voluptates facere sed pariatur enim, maiores omnis eum veniam animi. Atque voluptatem dolor vero reprehenderit eius tenetur dolores cumque id. Deleniti animi dignissimos et, quasi accusamus quos distinctio amet ducimus aliquid sed omnis quis sit unde eius neque. Asperiores earum alias accusantium hic ut cupiditate! Nihil illum enim neque velit ut ducimus quaerat, molestias exercitationem aperiam eius, ipsa nulla est, dignissimos nisi molestiae tempore deleniti! Debitis dolore harum ut eum error maiores animi reprehenderit, iure saepe nostrum eveniet doloremque quas ab? Repellat omnis aut nobis aliquid aliquam expedita quisquam optio provident quam eum voluptates, dicta nam velit error tempora id mollitia laborum commodi minus. Veniam enim, exercitationem, optio officiis, cupiditate repellat nam nihil a voluptatem atque aut. Ipsam optio, voluptas unde fuga enim tempora beatae possimus consectetur eveniet quod incidunt labore non. Eveniet facilis cum delectus exercitationem quidem vitae voluptas dolores illo a eligendi molestiae, quam, non sint voluptatum, optio accusamus mollitia porro officiis dolore recusandae asperiores. Laboriosam unde iusto saepe inventore quidem aperiam, doloremque tempora velit temporibus earum, dolorum iste consequatur corrupti quos esse incidunt obcaecati non dolore dolores aliquam mollitia excepturi explicabo animi corporis! Fuga est cum et sit possimus laborum non placeat beatae dignissimos! Nisi accusantium perspiciatis soluta ratione. Provident, excepturi. Cupiditate eius laudantium qui, at sunt odit repellendus, voluptatum temporibus asperiores facilis fugiat. Totam labore maiores pariatur non, vitae minima unde tempore eius, dolor, fuga commodi provident quaerat natus voluptatibus esse. Molestias, laudantium! Eos recusandae aut quis voluptatem earum error molestiae fugit odio, perspiciatis doloribus quos quo dicta ipsum id accusantium in tempore voluptas magnam culpa tempora pariatur suscipit facilis! Quia delectus, molestias esse reprehenderit perspiciatis odio. Nisi natus laboriosam maxime tempora, repellat labore aliquid quo commodi nulla accusantium rem excepturi accusamus facilis nesciunt officia neque ullam facere distinctio vitae autem placeat. Sit perferendis nostrum voluptatibus, possimus ducimus dignissimos tempore nesciunt dolorum, molestias et quisquam non, repellendus saepe cumque nam itaque. Architecto corporis totam distinctio dolores eaque illum mollitia dolore blanditiis autem, sed cum alias quibusdam quia nisi. Fuga vitae praesentium modi, eveniet odit aliquam similique quo adipisci consectetur earum iure corrupti, magni ut! Minus exercitationem, asperiores provident, aspernatur voluptatum autem modi explicabo velit sint porro iusto, illo ea. Quos dignissimos dolore temporibus repellat repellendus. Pariatur adipisci repellat est vero minus similique exercitationem maxime optio itaque laudantium veritatis reprehenderit quod ut magnam laboriosam, quaerat aliquid rem, voluptas voluptatum natus quidem praesentium! Commodi illo nobis corporis! Totam praesentium excepturi at mollitia quam doloribus perspiciatis magnam aperiam culpa iure vero rem, nulla nam nobis nihil explicabo minus veritatis! Nostrum praesentium adipisci dolores magni cum optio debitis ea. Aperiam, atque! Modi eaque esse, repellendus asperiores ab doloribus explicabo labore at possimus doloremque maiores molestiae temporibus sed numquam tenetur delectus optio aperiam sunt? Placeat enim blanditiis modi delectus aspernatur quaerat dolor atque commodi. Rerum eius, nobis deserunt beatae minus ut voluptatem sed. Assumenda placeat, eligendi quis iusto officia temporibus molestiae voluptatem ut neque! Quis dolorum, perferendis maiores id placeat dolores aliquid pariatur dignissimos et iure, asperiores recusandae corrupti veritatis sint. Expedita explicabo architecto delectus accusamus natus dolores quibusdam. Perspiciatis eius repellendus, corporis consectetur ea debitis illum ipsum dicta perferendis nam sequi asperiores dolorem officia corrupti. Assumenda ad consequuntur ducimus esse neque dignissimos mollitia, facere recusandae sint rem blanditiis culpa ea laborum sequi corrupti voluptates voluptatem fuga obcaecati veritatis eos aspernatur animi perspiciatis quam ipsa. Dolor quidem cum nisi voluptate necessitatibus quia a accusamus eius rerum impedit repellendus sed quam tempore asperiores doloribus aperiam, fugit illo maiores consequatur animi? Totam officia culpa magnam illum nisi, nihil optio consectetur illo a. Id, voluptatum. Quidem doloribus nulla sit totam id, reiciendis pariatur ipsa similique praesentium magnam est nisi aut assumenda aspernatur eum et quasi. Inventore molestias soluta ratione sint blanditiis pariatur, impedit enim possimus sequi, quidem non sed incidunt fugiat deleniti ad beatae. Quis omnis quia earum accusantium esse corrupti nam beatae facere velit non, nulla labore iusto odit incidunt necessitatibus eius cum aliquid molestiae soluta nobis fugiat! Facilis dolorum consequatur id unde inventore tempore, eos, dolore sapiente alias velit totam sunt aut ut odio aliquam vero minima dolores vel accusamus, dignissimos soluta! Libero accusamus maxime tempore totam, minus exercitationem nisi in harum perferendis cupiditate, velit nesciunt? Maxime, dolor reiciendis rerum ipsa doloremque incidunt fugiat alias debitis saepe, facere nesciunt nobis perferendis eius explicabo aliquid eaque sapiente accusantium ratione repudiandae commodi iusto facilis. Alias esse facere odio vitae nemo minus voluptates sint nihil quibusdam debitis eligendi sapiente, reiciendis ut vel dolorem amet harum repellendus asperiores ratione ipsam magni sunt! Voluptatem aspernatur voluptates vitae, eum dolorem qui ipsa aliquid necessitatibus perferendis, suscipit recusandae corporis adipisci possimus ab iure deserunt, expedita neque velit. Est totam beatae corrupti commodi, quisquam quo aut aperiam vitae ipsum earum ipsam labore delectus accusantium maxime pariatur ut nesciunt rem deserunt id? Harum earum ducimus asperiores facilis provident, nisi nesciunt vel totam!
                </p>
                <Portfolio></Portfolio>
                <p className='h1'>last</p>
            </div>
        </div>
    );
};

export default Dummy;