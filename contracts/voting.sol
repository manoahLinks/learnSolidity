// SPDX-License-Identifier: UNLICIENCED
pragma solidity ^0.8.9;

contract Voting {

    // constructor
    constructor () {
        // set the tx sender as the contract owner
        owner = msg.sender;
    }

    // voter struct
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint8 votedCandidateId;
    }   

    // candidate struct
    struct Candidate {
        uint8 id;
        string name;
        uint256 voteCount;   
    }

    // owner 
    address public owner;

    // allCandidates array
    Candidate[] public allCandidates;

    // storage counts
    uint8 public candidatesCount;
    uint256 public votersCount;
    uint256 public totalVotes;

    //voters & candidates 
    mapping (address => Voter) public voters;
    mapping (uint8 => Candidate) public candidates;

    // register voter
    function registerVoter () public {
        // check if voter is registered
        require(!voters[msg.sender].isRegistered, "voter already registered");

        // setting voters properties
        voters[msg.sender].isRegistered = true;
        voters[msg.sender].hasVoted = false;

        // incrementing voters count
        votersCount++;
    }

    // add a candidate func can be called by onlyOwner
    function addCandidate (string memory _name) public onlyOwner {
        
        //mapping new candidate with last candidateCount 
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        
        // setting new candidate and puahing to all candidates array
        allCandidates.push(Candidate(candidatesCount, _name, 0)); 

        // incrementing candidates count
        candidatesCount ++;
    }

    function allCandidate () public  view returns (Candidate[] memory) {
        return allCandidates;
    }

    // vote function
    function vote(uint8 _candidateId) public {
        // require voter is registered
        require(voters[msg.sender].isRegistered, "voter not yet registered");

        // require voter has not voted 
        require(!voters[msg.sender].hasVoted, "Already voted");

        // require candidateId exists
        require(_candidateId >= 0 && _candidateId < candidatesCount, "candidate does not exist");

        // setting voters properties after voting
        voters[msg.sender].hasVoted = true;
        voters[msg.sender].votedCandidateId = _candidateId;

        // incrementing voted candidates count
        candidates[_candidateId].voteCount ++;

        // incrementing total votes 
        totalVotes ++;
    }

    modifier onlyOwner () {
        require(msg.sender == owner, "caller not owner");
        _;
    }
}