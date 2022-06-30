initSidebarItems({"derive":[["BorshDeserialize",""],["BorshSerialize",""]],"fn":[["eval","Evaluate a validity predicate with given data. The address, changed storage keys and verifiers will have the same values as the input to caller’s validity predicate."],["get_block_epoch","Get epoch of the current block"],["get_block_hash","Get a block hash"],["get_block_height","Get height of the current block"],["get_chain_id","Get the chain ID"],["has_key_post","Check if the given key is present in storage after transaction execution."],["has_key_pre","Check if the given key was present in storage before transaction execution."],["iter_prefix_post","Get an iterator with the given prefix after transaction execution"],["iter_prefix_pre","Get an iterator with the given prefix before transaction execution"],["log_string","Log a string. The message will be printed at the `tracing::Level::Info`."],["read_bytes_post","Try to read a variable-length value as bytes at the given key from storage after transaction execution."],["read_bytes_pre","Try to read a variable-length value as bytesat the given key from storage before transaction execution."],["read_post","Try to read a Borsh encoded variable-length value at the given key from storage after transaction execution."],["read_pre","Try to read a Borsh encoded variable-length value at the given key from storage before transaction execution."],["verify_tx_signature","Verify a transaction signature. The signature is expected to have been produced on the encoded transaction [`anoma::proto::Tx`] using [`anoma::types::key::ed25519::sign_tx`]."]],"struct":[["PostKeyValIterator",""],["PreKeyValIterator",""]],"trait":[["BorshDeserialize","A data-structure that can be de-serialized from binary format by NBOR."],["BorshSerialize","A data-structure that can be serialized into binary format by NBOR."]]});