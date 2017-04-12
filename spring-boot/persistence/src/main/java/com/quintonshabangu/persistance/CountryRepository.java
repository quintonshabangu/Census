package com.quintonshabangu.persistance;

import com.quintonshabangu.domain.Country;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by quinton.shabangu on 2017/04/06.
 */
public interface CountryRepository extends PagingAndSortingRepository<Country, Long> {}
