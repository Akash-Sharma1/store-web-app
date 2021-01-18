package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Query
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class OrderQuery(private val orderRepository: OrderRepository) : Query {

  fun orders(page : Long? = 1) : List<Order>{
    val list: MutableList<Order> = mutableListOf();
    val orders = orderRepository.findAllByStatusIsNot(OrderStatus.PENDING)
    var index: Long = 0
    var req = page
    req = req ?: 1
    orders.forEach {
      if(index >= (req-1)*6 && index < (req-1)*6+6) {
        list.add(it);
      }
      index += 1
    }
    return list;
  }

  fun carts(page : Long? = 1) : List<Order>{
    val list: MutableList<Order> = mutableListOf();
    val orders = orderRepository.findAllByStatusIs(OrderStatus.PENDING)
    var index: Long = 0
    var req = page
    req = req ?: 1
    orders.forEach {
      if(index >= (req-1)*6 && index < (req-1)*6+6) {
        list.add(it);
      }
      index += 1
    }
    return list;
  }

  fun cartCount() : Int{
    return orderRepository.countByStatus(OrderStatus.PENDING)
  }

  fun ordersCount() : Int{
    return orderRepository.countByStatusIsNot(OrderStatus.PENDING)
  }

  fun order(id: Long) = orderRepository.findById(id).get()
}
