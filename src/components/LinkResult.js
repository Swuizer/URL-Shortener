import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchData = async () => {
      try{
        setLoading(true);
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(res.data.result.full_short_link);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }

    useEffect(() => {
      if(inputValue.length){
        fetchData();
      }
    }, [inputValue]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, [copied]);

    if(loading){
      return <p className='text-center'>Loading</p>
    }

    if(error){
      return <p className='text-center'>Error</p>
    }

  return (
    <>
      {shortenLink && (
      <div className='flex items-center justify-between py-4 px-4 z-40'>
          <p className='w-full text-white border-2 text-sm border-[#f99f38] py-1 px-2 md:px-4 md:mr-4 bg-slate-400'>
            {shortenLink}
          </p>
          <CopyToClipboard
              text={shortenLink}
              onCopy={() => setCopied(true)}
          >
              <button className='w-full h-full text-white cursor-pointer bg-[#f99f38] px-2 relative text-[10px] sm:text-base md:mt-[1px]'>
                Copy to Clipboard <span className='text-white absolute -top-7 
                left-[10%] md:left-[30%] rounded-sm'> {copied ? <span className="absolute py-1 px-4 text-xs font-bold bg-[#f99f38]">copied</span> :  <span className="absolute bg-slate-900"></span>}</span>
              </button>
          </CopyToClipboard>

      </div>
      )}
    </>
  )
}

export default LinkResult