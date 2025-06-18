import IconArrow from '@/components/icon/IconArrow'
import {DataSearch} from '@/types/options.interface'
import Image from 'next/image'

export default function SearchPopup({dataSearch}: {dataSearch: DataSearch}) {
  return (
    <div className='search-popup active'>
      <div className='search-popup__container'>
        <div>
          <div className='search-popup__input-wrapper'>
            <Image
              src={'/header/search-normal.svg'}
              alt=''
              width={40}
              height={40}
            />
            <input
              type='text'
              className='search-popup__input'
              placeholder='Enter search keyword'
            />
          </div>

          <div className='search-popup__history'>
            <p>{dataSearch?.history}</p>
            <div className='search-popup__history-list'>
              <div className='search-popup__history-item'>
                <p className='search-popup__history-item-title'>
                  <Image
                    src={'/header/clock.svg'}
                    alt=''
                    width={40}
                    height={40}
                  />
                  HaGiang
                </p>
                <Image
                  className='history__close'
                  src={'/header/add.svg'}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <div className='search-popup__history-item'>
                <p className='search-popup__history-item-title'>
                  <Image
                    src={'/header/clock.svg'}
                    alt=''
                    width={40}
                    height={40}
                  />
                  HaGiang
                </p>
                <Image
                  className='history__close'
                  src={'/header/add.svg'}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <div className='search-popup__history-item'>
                <p className='search-popup__history-item-title'>
                  <Image
                    src={'/header/clock.svg'}
                    alt=''
                    width={40}
                    height={40}
                  />
                  HaGiang
                </p>
                <Image
                  className='history__close'
                  src={'/header/add.svg'}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className='search-popup__hot-search'>
            <p>{dataSearch?.hot_search?.title}</p>
            <div className='search-popup__hot-search-list'>
              {Array.isArray(dataSearch?.hot_search?.key) &&
                dataSearch?.hot_search?.key?.map(
                  (item: {key: string}, index: number) => {
                    return (
                      <div
                        key={index}
                        className='search-popup__hot-search-item'
                      >
                        <p>{item?.key}</p>
                      </div>
                    )
                  },
                )}
            </div>
          </div>
        </div>
        <button className='search-popup__btn'>
          <p>{dataSearch?.button}</p>
          <IconArrow />
        </button>
      </div>
    </div>
  )
}
