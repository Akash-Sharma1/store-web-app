package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Query
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class OrderQuery(private val orderRepository: OrderRepository) : Query {

  fun orders() : List<Order>{
    return orderRepository.findAll()
  }

  fun order(id: Long) = orderRepository.findById(id).get()
}
