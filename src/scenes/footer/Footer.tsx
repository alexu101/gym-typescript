import Logo from '@/assets/Logo.png'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Curabitur semper turpis nibh, eget imperdiet leo ullamcorper quis. Aliquam vestibulum lobortis ex quis varius. Vestibulum ac mauris tincidunt, eleifend metus eget, luctus nulla. Sed cursus ullamcorper arcu, non maximus dui commodo sed. Sed a rhoncus leo, eu euismod purus. Fusce condimentum in mi eu fringilla. Pellentesque ornare non nisi ut mattis. Ut suscipit, nunc at dictum pharetra, nisl odio dignissim odio, a tincidunt eros orci non lacus.
                </p>
                <p>
                    © Evogym All Rights Reserved
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Et gravida id et etia</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact US</h4>
                <p className='my-5'>tempus resus mattis lusis egras</p>
                <p className='my-5'>(333)444-2351</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer