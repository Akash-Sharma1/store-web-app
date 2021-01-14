package com.expediagroup.graphql.demo.repository

import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface  AddressRepository: JpaRepository<Address, Long>{
  fun findAllByUser(user: User): List<Address>
}