package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Query
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class ProductQuery(
  private val productRepository: ProductRepository,
  private val customProductRepository: CustomProductRepository,
  private val userRepository: UserRepository
) : Query {
  fun product(id: Long) : Product{
    return productRepository.findById(id).get()
  }

  fun custom_product(id: Long) : CustomProduct{
    return customProductRepository.findById(id).get()
  }
  
  fun products() : List<Product> {
    return productRepository.findAll()
  }

  fun custom_products(userId : Long) : List<CustomProduct>{
    val user = userRepository.findById(userId).get()
    return customProductRepository.findAllByUser(user)
  }
}