// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

contract Voting {

    // =============================
    //       STORAGE
    // =============================

    // voter struct
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId;
    }   

    // candidate struct
    struct Candidate {
        uint8 id;
        string name;
        uint256 voteCount;   
    }

    // all voters and candidates
    Voter[] public voters;
    Candidate[] public candidates;


    uint256 public candidatesCount;
    uint256 public votersCount;

    mapping (address => Voter) voterDetails;
    mapping (uint8 => Candidate) candidateDetails;


    function registerVoter () public {
        // check if candidate is registered
        require(!voterDetails[msg.sender].isRegistered, "voter already registered");
        Voter memory newVoter = Voter(true, false, votersCount ++);
        voterDetails[msg.sender].isRegistered == true;
        voterDetails[msg.sender].hasVoted == false;
        voters.push(newVoter);
        votersCount++;

    }

    function getAllVoters () public view returns (Voter[] memory) {
        return voters;
    }

}