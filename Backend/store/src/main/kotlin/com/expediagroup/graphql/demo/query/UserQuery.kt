package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Query
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class UserQuery(private val userRepository: UserRepository) : Query {
  fun users() : List<User>{
    return userRepository.findAll()
  }

  fun user(id: Long) = userRepository.findById(id).get()
}
