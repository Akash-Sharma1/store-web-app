package com.expediagroup.graphql.demo.models

import javax.persistence.*

@Entity(name="products")
@Inheritance(strategy = InheritanceType.JOINED)

open class Product{
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id : Long? = null
  open var name: String = ""
  open var price: Float = 0f
  open var description: String = ""
  var availablity: Availablity = Availablity.INSTOCK
  var reviews: Int = 0

  @OneToMany(mappedBy = "product", cascade = arrayOf(CascadeType.ALL), fetch = FetchType.LAZY)    
  var orders: List<Order> = listOf()
}

enum class Availablity {
  INSTOCK, OUTOFSTOCK
}
