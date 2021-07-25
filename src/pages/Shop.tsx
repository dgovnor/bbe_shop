import React, { useState } from 'react'
import { getPhotos } from '../apiFactory'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { IconNames } from '../components/Icon/IconNames'
import { Modal } from '../components/Modal'
import { useQuery } from 'react-query'
import { Loader } from '../components/Loader'
import { Button } from '../components/Button'

export const Shop = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalPhoto, setModalPhoto] = useState()
  const query = useQuery('photos', getPhotos)
  const { isLoading, data } = query

  const myArr = [
    {
      img: '',
      title: 'Fruit Basket',
      amount: '#2,500',

      website: 'fruit.ng',
      id: 1,
    },
    {
      img: '',
      title: 'Nuts',
      amount: '#3,500',
      website: 'fruit.ng',
      id: 2,
    },
    {
      img: '',
      title: 'Green Pepper',
      amount: '#500',
      website: 'fruit.ng',
      id: 3,
    },
  ]
  if (!isLoading) {
    data.map((item: any, index: number) => {
      return (myArr[index].img = item.thumbnailUrl)
    })
  }
  const handleOpenModal = (id: number) => {
    setModalPhoto(data[id - 1].url)
    setOpenModal(true)
  }
  return (
    <>
      <main className="mx-28">
        <h1
          className=" mt-40 text-center text-6xl font-bold"
          style={{ lineHeight: '72px' }}
        >
          Shop With Freedom
        </h1>

        <h1
          className="capitalize w-80 text-center mx-auto text-lg mt-5"
          style={{ lineHeight: '24px' }}
        >
          Sell and Buy product of your choice
        </h1>

        <div className=" mt-28">
          <img
            src={'/shopImage.jpg'}
            style={{ margin: '0 auto' }}
            alt="shopImage"
          />
        </div>
      </main>
      <div
        className="w-full py-36 px-44 mt-14 mx-0 grid grid-cols-12"
        style={{ backgroundColor: '#E5E5E5' }}
      >
        {isLoading && (
          <div className="col-span-12 ">
            <Loader size="xxxl" />
          </div>
        )}
        {!isLoading &&
          myArr.map((arr) => (
            <div key={arr.id} className="col-span-4">
              <div className="">
                <img
                  className="h-40 w-80 object-cover cursor-pointer"
                  style={{ borderRadius: '20px 20px 0px 0px' }}
                  src={arr.img}
                  onClick={() => handleOpenModal(arr.id)}
                  alt="shop"
                />
              </div>
              <div
                className="px-5 pt-9 text-left w-80 h-40 bg-white"
                style={{ borderRadius: '0px 0px 20px 20px' }}
              >
                <h1 className="text-4xl font-medium capitalize overflow-ellipsis">
                  {arr.title}
                </h1>
                <h5 className="text-2xl text-seaGreen font-medium capitalize">
                  {arr.amount}
                </h5>
                <p className="text-xs font-medium flex justify-end">
                  {arr.website}
                </p>
              </div>
            </div>
          ))}
      </div>
      <main className="mx-28">
        <h3 className="text-lg mt-24 font-bold uppercase ">
          Shopping made supper easy
        </h3>
        <h1
          className="text-6xl font-bold lowercase mt-3"
          style={{ color: '#2B2929' }}
        >
          Shop with Freedom
        </h1>
        <div className="flex content-center justify-center mt-5">
          <img src={'/people.jpg'} alt="people" />
        </div>
        <h1
          className=" text-4xl text-center mx-auto mt-9"
          style={{ lineHeight: '41px', width: '32.438rem' }}
        >
          Our App is is beta and coming soon 🎉
        </h1>

        <Footer />
      </main>
      {openModal && (
        <Modal>
          <div className="" style={{ width: '32.75rem' }}>
            <button
              className="text-white text-center absolute"
              type="button"
              style={{ right: '522px', top: '50px' }}
              onClick={() => setOpenModal(false)}
            >
              <Icon name={IconNames.close} />
            </button>
            <img
              className="h-80 min-w-full object-cover"
              src={modalPhoto}
              style={{ borderRadius: '20px 20px 0px 0px' }}
              alt="shop"
            />
          </div>
          <div
            className="px-5 pt-9 text-left bg-white"
            style={{ borderRadius: '0px 0px 20px 20px', width: '32.75rem' }}
          >
            <h1 className="text-4xl font-medium capitalize overflow-ellipsis">
              Nuts
            </h1>
            <h5 className="text-2xl my-3 text-seaGreen font-medium capitalize">
              #3,500
            </h5>
            <p className="text-2xl mb-8 w-full capitalize">
              High Quality Palm & Almon Nuts, grown in the beautiful Planes of
              Jos Plateau.
            </p>
            <p className=" font-medium">fruit.ng</p>
            <div className="flex mt-16 justify-end mb-0">
              <div className="flex mt-6 text-2xl font-medium">
                <p className="mr-2">Add to cart</p>
                <div>
                  <Icon name={IconNames.chart} />
                </div>
              </div>
              <div
                className="w-full font-bold text-2xl ml-5"
                style={{ width: '179px' }}
              >
                <Button isBold name="Buy Now" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
