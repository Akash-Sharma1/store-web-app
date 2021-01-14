package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class ProductMutations(
  private val staticProductRepository: StaticProductRepository,
  private val customProductRepository: CustomProductRepository,
  private val userRepository: UserRepository
) : Mutation {

  fun addProduct(name: String, price: Float, description: String): Product{
    val product = StaticProduct(name = name, price = price, description = description)
    staticProductRepository.save(product)
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
    var product = staticProductRepository.findById(id).get()
    product.name = name ?: product.name
    product.description = description ?: product.description
    product.price = price ?: product.price
    staticProductRepository.save(product)
    return product
  }

  fun updateCustomProduct(
    id: Long, max_price: Float, min_price: Float, min_days: Int, max_days: Int,
    description: String, size: Float
  ): CustomProduct{
    var product = customProductRepository.findById(id).get()
    product.min_price = min_price
    product.max_price = max_price
    product.min_days = min_days
    product.max_days = max_days
    product.size = size
    product.description = description
    customProductRepository.save(product)
    return product
  }

  fun removeProduct(id: Long): Product {
    val product = staticProductRepository.findById(id).get()
    if (staticProductRepository.existsById(id)) {
      staticProductRepository.deleteById(id)
    }
    return product
  }
}