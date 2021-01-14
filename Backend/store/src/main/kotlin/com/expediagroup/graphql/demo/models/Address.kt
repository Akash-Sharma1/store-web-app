package com.expediagroup.graphql.demo.models

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity @Table(name = "address")
data class Address(
  @get: NotBlank
  val city: String,

  @get: NotBlank
  val state: String,

  @get: NotBlank
  val country: String,

  @get: NotBlank
  val area: String,

  @get: NotBlank
  val hno: String,

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id")
  val user: User
) {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long? = null

  override fun toString(): String {
    return "$hno $area $city $state $country"
  }
}
