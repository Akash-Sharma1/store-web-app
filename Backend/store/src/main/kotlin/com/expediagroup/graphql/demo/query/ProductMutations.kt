package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class ProductMutations(
  private val productRepository: ProductRepository,
  private val customProductRepository: CustomProductRepository,
  private val userRepository: UserRepository
) : Mutation {

  fun addProduct(name: String, price: Float, description: String): Product{
    val product = Product(name, description, price)
    productRepository.save(product)
    return product
  }

  fun addCustomProduct(
    userId: Long, max_price: Float, min_price: Float, min_days: Int, max_days: Int,
    description: String, size: Float
  ): CustomProduct{
    val user = userRepository.findById(userId).get()
    val product = CustomProduct(user, max_price, min_price, max_days, min_days, description, size)
    customProductRepository.save(product)
    return product
  }

  fun updateProduct(id: Long, name: String?, description: String?, price: Float?): Product{
    var product = productRepository.findById(id).get()
    product.name = name ?: product.name
    product.description = description ?: product.description
    product.price = price ?: product.price
    productRepository.save(product)
    return product
  }

  fun updateCustomProduct(
    id: Long, max_price: Float?, min_price: Float?, min_days: Int?, max_days: Int?,
    description: String?, size: Float?
  ): CustomProduct{
    var product = customProductRepository.findById(id).get()
    product.min_price = min_price ?: product.min_price
    product.max_price = max_price ?: product.max_price
    product.min_days = min_days ?: product.min_days
    product.max_days = max_days ?: product.max_days
    product.size = size ?: product.size
    product.description = description ?: product.description
    customProductRepository.save(product)
    return product
  }

  fun removeProduct(id: Long): Product {
    val product = productRepository.findById(id).get()
    if (productRepository.existsById(id)) {
      productRepository.deleteById(id)
    }
    return product
  }
}