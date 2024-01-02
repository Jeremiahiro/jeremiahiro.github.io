import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { jay } from '../assets';

const Profile = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-2/3 ">
      <motion.div variants={textVariant()}>
        <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px]">Hi, I'm</p>
        <h2 className='font-black font-gilroy md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]'>Jeremiah Iro</h2>
      </motion.div>

      <motion.p
        variants={textVariant()}
        className="mt-4 text-[18px] max-w-3xl leading-[30px] font-gilroy text-justify"
      >
        A software developer with passion for driving innovation and efficiency in the dynamic world of technology. My extensive expereince of over 6 years spans various roles, from Full Stack Developer and Cloud DevOps to Application Support & IT Consulting. As a proactive and results-driven professional, I have successfully led projects/teams, which is evident in my ability to effectively work indepently and as part of a team. My proficiency in diverse technologies reflects my commitment to staying at the forefront of industry trends.
        <br />
        <br />
        {/* My hunger for knowledge and determination to turn information into action, inspried the pursit of my Masters in Information Managment and a Master's in Entrepreneurship and Innovation Management thus I bring a unique blend of technical expertise and strategic business acumen to every project. */}

      </motion.p>

      <motion.div 
        variants={fadeIn('right', '', 0.5, 1)}
        className="flex justify-center t-20"
      >
        <svg width="160" className='' viewBox="0 80 204 204">
          {/* Circle */}
          <path d="M107.48917,273.84851l-.13574-1.99609c3.90137-.26465,7.81299-.79883,11.62598-1.58887l.40527,1.95898c-3.90186,.80762-7.90381,1.35449-11.89551,1.62598Zm-12.01953-.17773c-4.03564-.36328-8.0249-.94141-11.85645-1.71777l.39746-1.96094c3.75977,.7627,7.67578,1.33008,11.63867,1.68652l-.17969,1.99219Zm35.479-4.68652l-.6709-1.88477c3.67578-1.30762,7.29541-2.88379,10.75977-4.68359l.92188,1.77539c-3.54492,1.8418-7.24951,3.4541-11.01074,4.79297Zm-58.92188-.12598c-3.83105-1.28516-7.56592-2.81934-11.10059-4.5625l.88379-1.79297c3.45508,1.70215,7.10596,3.20312,10.85254,4.45898l-.63574,1.89648Zm-21.46924-10.62207c-3.30176-2.26367-6.45947-4.78711-9.38477-7.50098l1.36035-1.4668c2.85352,2.64746,5.93408,5.10938,9.15527,7.31738l-1.13086,1.65039Zm101.6499-.29297l-1.15527-1.63281c3.18555-2.25391,6.24609-4.74805,9.09668-7.41211l1.36523,1.46094c-2.91602,2.72559-6.04736,5.27734-9.30664,7.58398Zm-119.22266-16.0166c-2.48828-3.10547-4.78223-6.43652-6.81738-9.89941l1.72461-1.01367c1.98633,3.38086,4.2251,6.63184,6.65332,9.66309l-1.56055,1.25Zm136.72656-.34082l-1.55078-1.26367c2.46729-3.03027,4.74756-6.25586,6.77637-9.58594l1.70801,1.04102c-2.07617,3.40723-4.40869,6.70703-6.93359,9.80859ZM20.81876,221.27234c-1.51807-3.66797-2.80859-7.49609-3.83545-11.37891l1.93359-.51172c1.00391,3.79688,2.26562,7.54004,3.74951,11.125l-1.84766,.76562Zm161.35986-.15625l-1.83398-.79883c1.55713-3.57812,2.87988-7.30078,3.93164-11.06445l1.92578,.53906c-1.07617,3.85059-2.42969,7.66113-4.02344,11.32422ZM14.67618,198.11121c-.51123-3.95215-.77246-7.98242-.77588-11.97754l2-.00195c.00342,3.91113,.25879,7.85547,.75928,11.72363l-1.9834,.25586Zm173.95654-.0791l-1.98145-.26953c.52441-3.85449,.79004-7.79395,.79004-11.70898l-.00049-.18066h2l.00049,.17285c0,4.0127-.27197,8.04297-.80859,11.98633ZM16.63956,174.40711l-1.98438-.25391c.50732-3.97363,1.27637-7.93896,2.28613-11.78467l1.93457,.50781c-.98779,3.76221-1.74023,7.64209-2.23633,11.53076Zm169.98779-.23926c-.53467-3.86914-1.34229-7.73389-2.39893-11.48633l1.9248-.54199c1.08203,3.83984,1.90771,7.79492,2.45557,11.75488l-1.98145,.27344ZM22.6049,151.74597l-1.84961-.76172c1.52979-3.71436,3.32178-7.33447,5.32568-10.75977l1.72656,1.00977c-1.95801,3.3457-3.7085,6.88232-5.20264,10.51172Zm157.67188-.11328c-1.56055-3.56836-3.38477-7.06641-5.42236-10.39746l1.70605-1.04395c2.08545,3.40869,3.95215,6.98877,5.54883,10.64062l-1.83252,.80078Zm-12.2124-19.96484c-2.46875-3.02051-5.16895-5.90137-8.02588-8.56201l1.36328-1.46387c2.92285,2.72266,5.68555,5.66992,8.21143,8.76025l-1.54883,1.26562Zm-133.62549-.10498l-1.56348-1.24707c2.49854-3.13232,5.24463-6.09912,8.16113-8.81836l1.36426,1.46289c-2.8457,2.65283-5.52441,5.54688-7.96191,8.60254Zm116.48682-15.85498c-3.19531-2.25146-6.57129-4.30127-10.03467-6.09277l.91895-1.77637c3.54395,1.83301,6.99854,3.93066,10.26807,6.23438l-1.15234,1.63477Zm-99.38672-.08545l-1.13477-1.64746c3.26709-2.25,6.75098-4.29639,10.35498-6.08301l.88867,1.79199c-3.51953,1.74414-6.92041,3.74219-10.10889,5.93848Zm20.95166-10.42139l-.63965-1.89502c3.71387-1.25293,7.61035-2.30127,11.58105-3.11475l.40137,1.95898c-3.89014,.79736-7.70654,1.82373-11.34277,3.05078Zm57.62646-.25098c-3.6792-1.30127-7.48584-2.3584-11.31396-3.14355l.40137-1.95898c3.91797,.80322,7.81396,1.88525,11.57959,3.2168l-.66699,1.88574Zm-34.64893-4.50537l-.18262-1.99121c2.00195-.18359,4.06006-.31787,6.11719-.39893,1.94629-.02295,3.96338,.06348,5.90186,.19092l-.13086,1.99609c-1.89551-.125-3.82373-.18799-5.73145-.18799-1.9834,.0791-4.00635,.21143-5.97412,.39111Z" fill="#3f3d56"/>
              
            <g className="text-xl font-black font-gilroy tracking-tight text-gray-600 dark:text-gray-400">
              <text x="50" y="190" fill="currentColor" className="">Lets Connect</text>
            </g>

            {/* LinkedIn */}
            <a href='https://www.linkedin.com/in/jeremiahiro' rel="noreferrer" target='_blank' id='linkedin'>
              <circle cx="30" cy="140" r="20" fill="#3498DB"/>
              <g transform="translate(-4.5,0)" className='animate-pulse'>
                <path d="M24,130.82262c0-.83611,.69478-1.51372,1.25203-1.51372h18.02996c.85725,0,1.55203,.67761,1.55203,1.51372v18.10657c0,.83612-.69478,1.51372-1.55203,1.51372H25.85933c-.85725,0-1.55203-.67761-1.55203-1.51372v-18.10657Zm6.52909,16.17809v-9.54333h-3.17142v9.54333h3.17142Zm-1.58505-10.84704c1.10557,0,1.79375-.73177,1.79375-1.64845-.01981-.9365-.68686-1.64845-1.77262-1.64845s-1.79507,.71327-1.79507,1.64845c0,.91669,.68818,1.64845,1.7528,1.64845h.02113Zm6.48286,10.84704v-5.32974c0-.28531,.02113-.57062,.10567-.77403,.22851-.5693,.75026-1.15973,1.62732-1.15973,1.14784,0,1.60619,.87442,1.60619,2.15831v5.10519h3.17142v-5.47371c0-2.93235-1.56392-4.29549-3.6509-4.29549-1.6828,0-2.43702,.92461-2.8597,1.57581v.03302h-.02113l.02113-.03302v-1.34994h-3.1701c.03963,.89555,0,9.54333,0,9.54333h3.1701Z" fill="#fff"/>
              </g>
            </a>

            {/* Facebook */}
            {/* <g id="facebook" className='animate-pulse'>
              <circle cx="104.60666" cy="99.51508" r="20" fill="#6c63ff"/>
              <path d="M104.95126,94.62378c1.4771-1.99759,3.11018-3.57019,5.1985-3.57019,3.94265,0,7.18972,5.01864,7.19131,10.99388,0,3.645-1.56942,5.92909-4.38832,5.92909-2.456,0-3.81213-1.37841-6.24584-5.44999l-1.06166-1.78748-.18782-.31356c-.27686-.46792-.55807-.93325-.8436-1.39592l-1.87502,3.31074c-2.66292,4.65573-4.1623,5.63622-6.24425,5.63622-2.89371,0-4.6223-2.25226-4.6223-5.82404,0-5.70625,3.17545-11.09894,7.31865-11.09894,.50775,0,.99481,.06208,1.47073,.19419,.49343,.13689,.97253,.35017,1.45322,.64782,.91841,.57142,1.83682,1.45641,2.83641,2.72818Zm2.41302,3.53994c-.40111-.6526-.7863-1.25267-1.15717-1.8034l-.00955-.01273c1.34499-2.07717,2.456-3.11019,3.77552-3.11019,2.7425,0,4.93746,4.03815,4.93746,8.99789,0,1.89094-.62076,2.98762-1.90208,2.98762-1.23039,0-1.81772-.81177-4.15434-4.56818l-1.49143-2.49101h.00159Zm-7.77865-4.3151c1.15398,.15917,2.20451,1.00914,3.72458,3.185-.87708,1.34303-1.74458,2.6923-2.60243,4.0477-2.15994,3.38396-2.90645,4.1432-4.10818,4.1432-1.23675,0-1.97371-1.08554-1.97371-3.02423,0-4.14161,2.06603-8.37872,4.52998-8.37872,.14484,0,.2881,.00955,.42976,.02865v-.00159Z" fill="#fff"/>
            </g> */}

            {/* Twitter */}
            {/* <a href="https://twitter.com/jeremiahiro_" rel="noreferrer" target='_blank' id="twitter" className='animate-pulse'>
              <circle cx="27.71967" cy="142.22257" r="20" fill="#6c63ff"/>
              <path d="M23.36215,151.74693c8.84692,0,13.68649-7.33043,13.68649-13.67623,0-.20513,0-.41319-.00879-.61832,.94221-.68207,1.7554-1.52652,2.40147-2.49378-.88013,.38806-1.81281,.64382-2.76777,.75898,1.00591-.60126,1.75931-1.5473,2.12015-2.66228-.94508,.55989-1.97947,.95293-3.05789,1.16191-1.82017-1.93846-4.86714-2.03436-6.8056-.21419-1.2518,1.17541-1.78285,2.92855-1.3937,4.60102-3.86768-.19394-7.47139-2.02002-9.91505-5.02419-1.27306,2.19875-.62039,5.00817,1.49158,6.42053-.76258-.02591-1.5084-.23068-2.1773-.5978v.06593c.00271,2.28804,1.61438,4.25854,3.85642,4.71503-.4128,.11372-.83923,.17041-1.2674,.1685-.30186,.00092-.60311-.02705-.89964-.08352,.63019,1.95876,2.43647,3.29978,4.49379,3.33627-1.70469,1.33891-3.81041,2.06507-5.97804,2.06155-.38195,.00161-.76363-.02041-1.14286-.06593,2.20003,1.40259,4.75503,2.14733,7.36413,2.14653Z" fill="#fff"/>
            </a> */}

            {/* mail */}
            <a href='mailto:jeremiahiro@gmail.com' rel="noreferrer" target='_blank' id="mail">
              <circle cx="170" cy="140" r="20" fill="#3498DB"/>
              <g transform="translate(160,130)" className='animate-pulse'>
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" fill='#fff'/>
              </g>
            </a>

            {/* Github */}
          <a href='https://github.com/jeremiahiro' rel="noreferrer" target='_blank' id="github" >
            <circle cx="170" cy="240" r="20" fill="#3498DB"/>
            <g transform="translate(155,225)" className='animate-pulse'>
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill='#fff'/>
            </g>
          </a>

          <a href='https://www.instagram.com/jeremiahiro_' rel="noreferrer" target='_blank' id="instagram" >
            <circle cx="30" cy="240" r="20" fill="#3498DB"/>
            <path className='animate-pulse' d="M30,228.02023c-3.12501,0-3.51797,.01439-4.74581,.06909-1.22784,.05758-2.06415,.25046-2.79682,.53547-.76852,.28907-1.46464,.7425-2.03968,1.3286-.58574,.57534-1.03912,1.27136-1.3286,2.03968-.28501,.73123-.47933,1.56898-.53547,2.7925-.0547,1.23072-.06909,1.62224-.06909,4.75157,0,3.12645,.01439,3.51797,.06909,4.74581,.05758,1.2264,.25046,2.06271,.53547,2.79538,.29508,.75714,.68805,1.39913,1.3286,2.03968,.63911,.64055,1.2811,1.03495,2.03824,1.3286,.73411,.28501,1.56898,.47933,2.79538,.53547,1.22928,.0547,1.6208,.06909,4.74869,.06909s3.51797-.01439,4.74725-.06909c1.22496-.05758,2.06415-.25046,2.79682-.53547,.76803-.28921,1.46364-.74264,2.03824-1.3286,.64055-.64055,1.03351-1.28253,1.3286-2.03968,.28357-.73267,.47789-1.56898,.53547-2.79538,.0547-1.22784,.06909-1.61936,.06909-4.74725s-.01439-3.51941-.06909-4.74869c-.05758-1.22496-.2519-2.06271-.53547-2.79394-.28944-.76833-.74282-1.46437-1.3286-2.03968-.57486-.58632-1.27103-1.03978-2.03968-1.3286-.73411-.28501-1.57186-.47933-2.79682-.53547-1.22928-.0547-1.61936-.06909-4.74869-.06909h.00288Zm-1.03207,2.07566h1.03351c3.07463,0,3.43881,.01008,4.65225,.06621,1.12276,.05038,1.73308,.23895,2.139,.39584,.53691,.20872,.92124,.45918,1.32428,.86222s.65206,.78593,.86078,1.32428c.15834,.40448,.34546,1.0148,.39584,2.13756,.05614,1.21344,.06765,1.57762,.06765,4.65081s-.01152,3.43881-.06765,4.65225c-.05038,1.12276-.23895,1.73164-.39584,2.13756-.18462,.5-.47929,.95209-.86222,1.32284-.40304,.40304-.78593,.65206-1.32428,.86078-.40304,.15834-1.01336,.34546-2.13756,.39728-1.21344,.0547-1.57762,.06765-4.65225,.06765s-3.44025-.01295-4.65369-.06765c-1.12276-.05182-1.73164-.23895-2.13756-.39728-.5002-.18436-.95272-.4785-1.32428-.86078-.38325-.37133-.67837-.82385-.86366-1.32428-.1569-.40448-.34546-1.0148-.39584-2.13756-.0547-1.21344-.06621-1.57762-.06621-4.65369,0-3.07463,.01152-3.43737,.06621-4.65081,.05182-1.12276,.23895-1.73308,.39728-2.139,.20872-.53691,.45918-.92124,.86222-1.32428,.40304-.40304,.78593-.65206,1.32428-.86078,.40592-.15834,1.0148-.34546,2.13756-.39728,1.0623-.04894,1.47398-.06334,3.62017-.06477v.00288Zm7.17989,1.91157c-.76318,0-1.38186,.61868-1.38186,1.38186s.61868,1.38186,1.38186,1.38186h0c.76318,0,1.38186-.61868,1.38186-1.38186s-.61868-1.38186-1.38186-1.38186Zm-6.14638,1.61504c-3.26616-.05096-5.95522,2.55548-6.00618,5.82164-.05096,3.26616,2.55547,5.95522,5.82164,6.00618,.06151,.00096,.12303,.00096,.18455,0,3.26616-.05097,5.87259-2.74003,5.82163-6.00619-.04985-3.19432-2.62731-5.77178-5.82163-5.82163Zm0,2.07422c2.1202-.00089,3.83969,1.71714,3.84059,3.83735s-1.71714,3.83969-3.83735,3.84059h-.00324c-2.1202,0-3.83897-1.71876-3.83897-3.83897s1.71876-3.83897,3.83897-3.83897Z" fill="#fff"/>
          </a>
        </svg>
      </motion.div>

      <motion.div
        variants={fadeIn('left', '', 0.5, 1)}
        className="absolute bottom-0 right-0 w-[30rem] h-[34rem] ">
        <img
          src={jay}
          alt="Jeremiah Iro"
          className="object-cover object-top scale-[1.4] grayscale hover:grayscale-0"
        />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Profile, 'profile');
