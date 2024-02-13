package net.bluecollargigs.bcgbackend.service.impl;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.RecruiterDto;
import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.entity.Recruiter;
import net.bluecollargigs.bcgbackend.entity.Worker;
import net.bluecollargigs.bcgbackend.mapper.RecruiterMapper;
import net.bluecollargigs.bcgbackend.mapper.WorkerMapper;
import net.bluecollargigs.bcgbackend.repository.RecruiterRepository;
import net.bluecollargigs.bcgbackend.service.RecruiterService;

@Service
@AllArgsConstructor
public class RecruiterServiceImpl implements RecruiterService {

    private RecruiterRepository recruiterRepository;

    @Override
    public RecruiterDto createRecruiter(RecruiterDto recruiterDto) {

        Recruiter recruiter = RecruiterMapper.mapToRecruiter(recruiterDto);
        Recruiter savedRecruiter = recruiterRepository.save(recruiter);
        return RecruiterMapper.mapTRecruiterDto(savedRecruiter);
    }

}
