import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import ErrorMessage from '@components/ui/ErrorMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle  } from '@fortawesome/free-solid-svg-icons'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    setError(null)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      setSidebarView('CART_VIEW')
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        console.error(err)
        setError({
          ...err,
          message: 'Could not add item to cart. Please try again.',
        })
      }
    }
  }

  const openWhatsApp = () => {
    let target_product = product.name
    // encoded url target_product
    let encoded_target_product = encodeURIComponent(target_product)
    window.open(`http://wa.me/60104571068?text=Hello+saya+order+${encoded_target_product}`, '_blank')
    }

    return (
      <div className={className}>
        {/*<ProductOptions*/}
        {/*  options={product.options}*/}
        {/*  selectedOptions={selectedOptions}*/}
        {/*  setSelectedOptions={setSelectedOptions}*/}
        {/*/>*/}
        <Text
          className="pb-4 break-words w-full max-w-xl"
          html={product.descriptionHtml || product.description}
        />
        {/*<div className="flex flex-row justify-between items-center">*/}
        {/*  <Rating value={4} />*/}
        {/*  <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>*/}
        {/*</div>*/}
        <div className={"w-fill flex p-3 pl-3 mb-8 hover:bg-gray-200 rounded-lg"}>
          <FontAwesomeIcon icon={faMotorcycle} size={"xl"} />
          <span className={"ml-4"}>On Campus delivery available! (+RM1)</span>
        </div>
        <div>
          {error && <ErrorMessage error={error} className="my-5" />}

          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            style={{ color: '#fff', backgroundColor: '#25D366' }}
            onClick={openWhatsApp}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            Order on WhatsApp
          </Button>

        </div>
        {/*<div className="mt-6">*/}
        {/*  <Collapse title="Care">*/}
        {/*    This is a limited edition production run. Printing starts when the*/}
        {/*    drop ends.*/}
        {/*  </Collapse>*/}
        {/*  <Collapse title="Details">*/}
        {/*    This is a limited edition production run. Printing starts when the*/}
        {/*    drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due*/}
        {/*    to COVID-19.*/}
        {/*  </Collapse>*/}
        {/*  </div>*/}
    </div>
  )
}

export default ProductSidebar
