package com.expediagroup.graphql.demo.models

import javax.persistence.*

@Entity(name="products")
@Inheritance(strategy = InheritanceType.JOINED)

open class Product{
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id : Long? = null
  var name: String = ""
  var price: Float? = null
  open var description: String = ""
  var availablity: Availablity = Availablity.INSTOCK
  var reviews: Int = 0

  constructor(_name: String, _description: String, _price: Float?) {
    name = _name
    description = _description
    price = _price
  }

  @OneToMany(mappedBy = "product", cascade = arrayOf(CascadeType.ALL), fetch = FetchType.LAZY)    
  var orders: List<Order> = listOf()
}

enum class Availablity {
  INSTOCK, OUTOFSTOCK
}
