{
  description = "MkDocs environment for analogue video specifications";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        pythonEnv = pkgs.python3.withPackages (ps: with ps; [
          mkdocs
          mkdocs-material
          pygments
          pymdown-extensions
          ghp-import
          pyyaml
          numpy
          matplotlib
        ]);
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            pythonEnv
          ];

          shellHook = ''
            echo "MkDocs environment ready."
            echo "Run: mkdocs serve"
          '';
        };
      });
}