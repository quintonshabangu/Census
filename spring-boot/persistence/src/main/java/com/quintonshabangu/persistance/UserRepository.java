package com.quintonshabangu.persistance;

import com.quintonshabangu.domain.Person;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by quinton.shabangu on 2017/04/05.
 */
public interface UserRepository extends PagingAndSortingRepository<Person, Long>{}
