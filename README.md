# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug related to type coercion and undefined inputs in a simple JavaScript addition function.  The bug arises from relying solely on strict equality checks (===) without considering the possibility of undefined inputs. The solution shows how to handle these edge cases for more robust code.

## Bug Description

The `foo` function adds two numbers.  It correctly handles `null` inputs by returning `null`. However, it fails to handle undefined inputs, leading to unexpected behavior or errors if not accounted for.

## Solution

The solution enhances the function by explicitly checking for undefined values using typeof and handling them appropriately, preventing unexpected behavior and errors.