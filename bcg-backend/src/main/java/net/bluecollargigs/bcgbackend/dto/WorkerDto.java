package net.bluecollargigs.bcgbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// import net.bluecollargigs.bcgbackend.entity.User;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class WorkerDto {

    private Long workerId;
    private Long userId;
    private String skills;
    private String flanguage;
    private String slanguage;
    private String certification;
    
}
