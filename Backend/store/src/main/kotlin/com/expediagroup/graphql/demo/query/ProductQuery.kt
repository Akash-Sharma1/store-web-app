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

  fun customProduct(id: Long) : CustomProduct?{
    val product = customProductRepository.findById(id).get()
    return product
  }
  
  fun products(page: Long? = 1) : List<Product> {
    val products = productRepository.findAll().filter{ it.name != "CustomProduct" }
    val list: MutableList<Product> = mutableListOf();
    var index: Long = 0
    var req = page
    req = req ?: 1
    products.forEach {
      if(index >= (req-1)*6 && index < (req-1)*6+6) {
        list.add(it);
      }
      index += 1
    }
    return list;
  }

  fun customProducts(userId : Long, page: Long? = 1) : List<CustomProduct>{
    val user = userRepository.findById(userId).get()
    val products = customProductRepository.findAllByUser(user)
    val list: MutableList<CustomProduct> = mutableListOf();
    var index: Long = 0
    var req = page
    req = req ?: 1
    products.forEach {
      if(index >= (req-1)*6 && index < (req-1)*6+6) {
        list.add(it);
      }
      index += 1
    }
    return list;
  }

  fun customProductCount() : Long{
    return customProductRepository.count()
  }

  fun productCount() : Long{
    return productRepository.count()
  }

}